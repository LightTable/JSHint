##JSHint plugin for Light Table

A simple JSHint integration that shows JSHint warnings directly in the editor.

## Usage

To run JSHint on a file, run the command `Run jshint on current editor`. By default this will display inline warnings.
This plugin has the following additional behaviors you can add to your user.behaviors:

* `:lt.plugins.jshint/gutter-hints` - Enable jshint warnings to show up as gutter hints that display warning on hover
* `:lt.plugins/jshint/jshint-options` - Configure JSHint with a map of [JSHint options](http://jshint.com/docs/options/)
* `:lt.plugins.jshint/jshint-globals` - Define a list of globals to ignore
* `:lt.plugins.jshint/on-save` - Run JSHint on file save
* `:lt.plugins.jshint/on-change` - Run JSHint on change

Use one of these behaviors with the right tag e.g. `[:editor.javascript :lt.plugins.jshint/on-change]`

## For Committers

This plugin depends on the JSHint package. To upgrade it `npm install jshint@VERSION` and ensure all behaviors work correctly.
