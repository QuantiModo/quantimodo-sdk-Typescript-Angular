/**
 * quantimodo
 * We make it easy to retrieve and analyze normalized user data from a wide array of devices and applications. Check out our [docs and sdk's](https://github.com/QuantiModo/docs) or [contact us](https://help.quantimo.do).
 *
 * OpenAPI spec version: 2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */



export interface TrackingReminderNotificationPost {
    /**
     * track records a measurement for the notification.  snooze changes the notification to 1 hour from now. skip deletes the notification.
     */
    action: TrackingReminderNotificationPost.ActionEnum;
    /**
     * Id of the TrackingReminderNotification
     */
    id: number;
    /**
     * Optional value to be recorded instead of the tracking reminder default value
     */
    modifiedValue?: number;
}
export namespace TrackingReminderNotificationPost {
    export type ActionEnum = 'skip' | 'snooze' | 'track';
    export const ActionEnum = {
        Skip: 'skip' as ActionEnum,
        Snooze: 'snooze' as ActionEnum,
        Track: 'track' as ActionEnum
    }
}