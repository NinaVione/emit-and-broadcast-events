# emit-and-broadcast-events

## $emit(name, args);
Dispatches an event name upwards through the scope hierarchy notifying the registered $rootScope.Scope listeners.

The event life cycle starts at the scope on which $emit was called. All listeners listening for name event on this scope get notified. Afterwards, the event traverses upwards toward the root scope and calls all registered listeners along the way. The event will stop propagating if one of the listeners cancels it.

Any exception emitted from the listeners will be passed onto the $exceptionHandler service.

## $broadcast(name, args);
Dispatches an event name downwards to all child scopes (and their children) notifying the registered $rootScope.Scope listeners.

The event life cycle starts at the scope on which $broadcast was called. All listeners listening for name event on this scope get notified. Afterwards, the event propagates to all direct and indirect scopes of the current scope and calls all registered listeners along the way. The event cannot be canceled.

Any exception emitted from the listeners will be passed onto the $exceptionHandler service.
