module.exports = function(RED) {
  function ProjectDirNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      msg.projectdir = null;
      var s = RED.settings;
      var p = s ? s.get('projects') : null;
      if (s && s.userDir && p && p.activeProject) {
        msg.projectdir = s.userDir + "/projects/" + p.activeProject;
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("projectdir", ProjectDirNode);
}
