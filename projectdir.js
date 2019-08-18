module.exports = function(RED) {
  function ProjectDirNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      msg.projectdir = null;
      var s = RED.settings;
      if (s && s.userDir && s.projects && s.projects.activeProject) {
        msg.projectdir = s.userDir + "/" + s.projects.activeProject;
      }
      node.send(msg);
    });
  }
  RED.nodes.registerType("projectdir", ProjectDirNode);
}
