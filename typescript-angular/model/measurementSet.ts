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

import { MeasurementItem } from './measurementItem';


export interface MeasurementSet {
    /**
     * Way to aggregate measurements over time. Options are \"MEAN\" or \"SUM\". SUM should be used for things like minutes of exercise.  If you use MEAN for exercise, then a person might exercise more minutes in one day but add separate measurements that were smaller.  So when we are doing correlational analysis, we would think that the person exercised less that day even though they exercised more.  Conversely, we must use MEAN for things such as ratings which cannot be SUMMED.
     */
    combinationOperation?: MeasurementSet.CombinationOperationEnum;
    /**
     * Array of timestamps, values, and optional notes
     */
    measurementItems: Array<MeasurementItem>;
    /**
     * Name of the application or device used to record the measurement values
     */
    sourceName: string;
    /**
     * Unit of measurement
     */
    unitAbbreviatedName: string;
    /**
     * Variable category name
     */
    variableCategoryName?: string;
    /**
     * ORIGINAL name of the variable for which we are creating the measurement records
     */
    variableName: string;
    /**
     * UPC or other barcode scan result
     */
    upc?: string;
}
export namespace MeasurementSet {
    export type CombinationOperationEnum = 'MEAN' | 'SUM';
    export const CombinationOperationEnum = {
        MEAN: 'MEAN' as CombinationOperationEnum,
        SUM: 'SUM' as CombinationOperationEnum
    }
}