# deprecated

This module is deprecated, and should not be used.

The language provides a lot of options nowadays for managing
promises, which are a much better approach than callbacks in this
sort of situation.

If you want something that will coalesce async actions for the
same key, then the [lru-cache](http://npm.im/lru-cache) module
provides this in a much more comprehensive way, using the
fetchMethod function.
