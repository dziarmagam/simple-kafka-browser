import { Observable, of, Subscription } from 'rxjs';
import { mergeMap, tap, repeat, delay } from 'rxjs/operators';

export function pull<T>(getter: () => Observable<T>, updater: (T) => void, delayMs: number = 1000): Observable<any> {
    return of({}).pipe(
        mergeMap(_ => getter()),
        tap(updater),
        delay(delayMs),
        repeat()
    );

}

export function unsubscribe(subscription: Subscription) {
    if (subscription) {
        subscription.unsubscribe();
    }
}

