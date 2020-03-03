import { Position, Toaster, Intent } from '@blueprintjs/core'

/** Singleton toaster instance. Create separate instances for different options. */
export const toaster = Toaster.create({
   position: Position.TOP,
   canEscapeKeyClear: true,
   maxToasts: 3
})

export const toastSuccess = (msg, durationInMilliseconds) => toaster.show({
   message: msg,
   intent: Intent.SUCCESS,
   timeout: durationInMilliseconds
})

export const toastDanger = (msg, durationInMilliseconds) => toaster.show({
   message: msg,
   intent: Intent.DANGER,
   timeout: durationInMilliseconds
})

export const toastPrimary = (msg, durationInMilliseconds) => toaster.show({
   message: msg,
   intent: Intent.PRIMARY,
   timeout: durationInMilliseconds
})

export const toastWarning = (msg, durationInMilliseconds) => toaster.show({
   message: msg,
   intent: Intent.WARNING,
   timeout: durationInMilliseconds
})

// export const toastDynamic = (msg) => toaster.show({
//    message: Array.isArray(msg) ? msg.join('  \n') : msg,
//    intent,
//    timeout: durationInMilliseconds
// })
