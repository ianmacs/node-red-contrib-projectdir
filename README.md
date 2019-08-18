# node-red-contrib-projectdir

The new node "projectdir" when inserted into a flow will add an extra
field `msg.projectdir` to the incoming `msg` object and sets its value
to the file system path of the node-red project directory from which this
flow runs.

This is useful for calling e.g. custom shell skripts that are kept
in the same git repository as the node-red flows that use them.

The project directory location is extracted from undocumented fields
in the node-red settings. Therefore, this node might stop working
later today with the next release of node-red.

Use at your own risk.
