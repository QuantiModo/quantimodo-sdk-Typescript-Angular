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



export interface MeasurementItem {
    /**
     * Optional note to include with the measurement
     */
    note?: string;
    /**
     * Timestamp for the measurement event in epoch time (unixtime)
     */
    timestamp: number;
    /**
     * Measurement value
     */
    value: number;
}