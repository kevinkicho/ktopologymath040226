// progress.js — Local progress tracking (localStorage only)
// Provides the same API surface as the former Firebase version.
// All data persists in localStorage under the 'kmath-progress' key.

(function () {
  'use strict';

  var LS_KEY = 'kmath-progress';
  var _localCache = {};
  var _ready = false;
  var _readyCallbacks = [];

  // ── localStorage helpers ──────────────────────────────────────────
  function loadLocal() {
    try {
      _localCache = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    } catch (e) { _localCache = {}; }
  }

  function saveLocal() {
    try {
      localStorage.setItem(LS_KEY, JSON.stringify(_localCache));
    } catch (e) { /* quota exceeded */ }
  }

  // ── Init ───────────────────────────────────────────────────────────
  function init() {
    loadLocal();
    _ready = true;
    _fireCallbacks();
  }

  function _fireCallbacks() {
    var cbs = _readyCallbacks.slice();
    _readyCallbacks = [];
    cbs.forEach(function (cb) { cb(); });
  }

  function _writeProgress(moduleId, fields) {
    if (!_localCache.progress) _localCache.progress = {};
    if (!_localCache.progress[moduleId]) _localCache.progress[moduleId] = {};
    var keys = Object.keys(fields);
    for (var i = 0; i < keys.length; i++) {
      _localCache.progress[moduleId][keys[i]] = fields[keys[i]];
    }
    saveLocal();
  }

  // ── Public API ─────────────────────────────────────────────────────

  function onReady(cb) {
    if (_ready) cb();
    else _readyCallbacks.push(cb);
  }

  function markVisited(moduleId) {
    if (!moduleId) return;
    var p = (_localCache.progress || {})[moduleId];
    if (p && p.visited) return;
    _writeProgress(moduleId, { visited: true, visitedAt: new Date().toISOString() });
  }

  function markComplete(moduleId) {
    if (!moduleId) return;
    _writeProgress(moduleId, {
      visited: true,
      completed: true,
      completedAt: new Date().toISOString()
    });
  }

  function toggleComplete(moduleId) {
    if (!moduleId) return false;
    if (!_localCache.progress) _localCache.progress = {};
    var p = _localCache.progress[moduleId] || {};
    var wasComplete = !!p.completed;
    _writeProgress(moduleId, {
      visited: true,
      completed: !wasComplete,
      completedAt: wasComplete ? null : new Date().toISOString()
    });
    return !wasComplete;
  }

  function getProgress() {
    return _localCache.progress || {};
  }

  function getModuleProgress(moduleId) {
    return (_localCache.progress || {})[moduleId] || { visited: false, completed: false };
  }

  function getPathProgress(pathId) {
    var paths = window.LEARNING_PATHS || [];
    var path = null;
    for (var i = 0; i < paths.length; i++) {
      if (paths[i].id === pathId) { path = paths[i]; break; }
    }
    if (!path) return { completed: 0, visited: 0, total: 0, modules: [] };
    var progress = _localCache.progress || {};
    var completed = 0, visited = 0;
    var modules = path.modules.map(function (m) {
      var p = progress[m] || {};
      if (p.completed) completed++;
      if (p.visited) visited++;
      return { id: m, visited: !!p.visited, completed: !!p.completed };
    });
    return { completed: completed, visited: visited, total: path.modules.length, modules: modules };
  }

  function setActivePath(pathId) {
    _localCache.activePath = pathId;
    saveLocal();
  }

  function getActivePath() {
    return _localCache.activePath || null;
  }

  // Google upgrade stubs (no-op without Firebase)
  function upgradeToGoogle() {
    return Promise.reject(new Error('Cloud sync is not available'));
  }

  function isSignedInWithGoogle() {
    return false;
  }

  // ── Challenge tracking ─────────────────────────────────────────────
  function markChallengeComplete(moduleId, challengeId) {
    if (!moduleId || !challengeId) return;
    if (!_localCache.challenges) _localCache.challenges = {};
    if (!_localCache.challenges[moduleId]) _localCache.challenges[moduleId] = {};
    if (_localCache.challenges[moduleId][challengeId]) return;
    _localCache.challenges[moduleId][challengeId] = new Date().toISOString();
    saveLocal();
  }

  function getChallengeProgress(moduleId) {
    if (!_localCache.challenges || !_localCache.challenges[moduleId]) return {};
    return _localCache.challenges[moduleId];
  }

  function getAllChallengeProgress() {
    return _localCache.challenges || {};
  }

  // ── Notes ──────────────────────────────────────────────────────────
  function saveNote(moduleId, text) {
    if (!moduleId) return;
    if (!_localCache.notes) _localCache.notes = {};
    _localCache.notes[moduleId] = { text: text, updatedAt: new Date().toISOString() };
    saveLocal();
  }

  function getNote(moduleId) {
    if (!_localCache.notes || !_localCache.notes[moduleId]) return '';
    return _localCache.notes[moduleId].text || '';
  }

  function getAllNotes() {
    return _localCache.notes || {};
  }

  window.localProgress = {
    init: init,
    onReady: onReady,
    markVisited: markVisited,
    markComplete: markComplete,
    toggleComplete: toggleComplete,
    getProgress: getProgress,
    getModuleProgress: getModuleProgress,
    getPathProgress: getPathProgress,
    setActivePath: setActivePath,
    getActivePath: getActivePath,
    upgradeToGoogle: upgradeToGoogle,
    isSignedInWithGoogle: isSignedInWithGoogle,
    markChallengeComplete: markChallengeComplete,
    getChallengeProgress: getChallengeProgress,
    getAllChallengeProgress: getAllChallengeProgress,
    saveNote: saveNote,
    getNote: getNote,
    getAllNotes: getAllNotes
  };
})();
