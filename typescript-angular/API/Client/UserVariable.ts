/**
 * QuantiModo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do). 
 *
 * OpenAPI spec version: 5.8.5
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface UserVariable {
        /**
         * ID of the parent variable if this variable has any parent
         */
        "parentId"?: number;

        /**
         * User ID
         */
        "userId"?: number;

        /**
         * clientId
         */
        "clientId"?: string;

        /**
         * ID of variable
         */
        "variableId": number;

        /**
         * ID of unit to use for this variable
         */
        "defaultUnitId"?: number;

        /**
         * The minimum allowed value for measurements. While you can record a value below this minimum, it will be excluded from the correlation analysis.
         */
        "minimumAllowedValue"?: number;

        /**
         * The maximum allowed value for measurements. While you can record a value above this maximum, it will be excluded from the correlation analysis.
         */
        "maximumAllowedValue"?: number;

        /**
         * When it comes to analysis to determine the effects of this variable, knowing when it did not occur is as important as knowing when it did occur. For example, if you are tracking a medication, it is important to know when you did not take it, but you do not have to log zero values for all the days when you haven't taken it. Hence, you can specify a filling value (typically 0) to insert whenever data is missing.
         */
        "fillingValue"?: number;

        /**
         * The Variable this Variable should be joined with. If the variable is joined with some other variable then it is not shown to user in the list of variables
         */
        "joinWith"?: number;

        /**
         * The amount of time in seconds that elapses after the predictor/stimulus event before the outcome as perceived by a self-tracker is known as the “onset delay”. For example, the “onset delay” between the time a person takes an aspirin (predictor/stimulus event) and the time a person perceives a change in their headache severity (outcome) is approximately 30 minutes.
         */
        "onsetDelay"?: number;

        /**
         * The amount of time over which a predictor/stimulus event can exert an observable influence on an outcome variable’s value. For instance, aspirin (stimulus/predictor) typically decreases headache severity for approximately four hours (duration of action) following the onset delay.
         */
        "durationOfAction"?: number;

        /**
         * ID of variable category
         */
        "variableCategoryId"?: number;

        /**
         * updated
         */
        "updated"?: number;

        /**
         * Is variable public
         */
        "public"?: number;

        /**
         * A value of 1 indicates that this variable is generally a cause in a causal relationship.  An example of a causeOnly variable would be a variable such as Cloud Cover which would generally not be influenced by the behaviour of the user
         */
        "causeOnly"?: boolean;

        /**
         * 0 -> No filling, 1 -> Use filling-value
         */
        "fillingType"?: string;

        /**
         * Number of measurements
         */
        "numberOfMeasurements"?: number;

        /**
         * Number of processed measurements
         */
        "numberOfProcessedDailyMeasurements"?: number;

        /**
         * Number of measurements at last analysis
         */
        "measurementsAtLastAnalysis"?: number;

        /**
         * ID of last Unit
         */
        "lastUnitId"?: number;

        /**
         * ID of last original Unit
         */
        "lastOriginalUnitId"?: number;

        /**
         * Last Value
         */
        "lastValue"?: number;

        /**
         * Last original value which is stored
         */
        "lastOriginalValue"?: number;

        /**
         * Number of correlations for this variable
         */
        "numberOfCorrelations"?: number;

        /**
         * status
         */
        "status"?: string;

        /**
         * error_message
         */
        "errorMessage"?: string;

        /**
         * When this variable or its settings were last updated
         */
        "lastSuccessfulUpdateTime"?: Date;

        /**
         * Standard deviation
         */
        "standardDeviation"?: number;

        /**
         * Variance
         */
        "variance"?: number;

        /**
         * Minimum recorded value of this variable
         */
        "minimumRecordedValue"?: number;

        /**
         * Maximum recorded daily value of this variable
         */
        "maximumRecordedDailyValue"?: number;

        /**
         * Mean
         */
        "mean"?: number;

        /**
         * Median
         */
        "median"?: number;

        /**
         * Most common Unit ID
         */
        "mostCommonUnitId"?: number;

        /**
         * Most common value
         */
        "mostCommonValue"?: number;

        /**
         * Number of unique daily values
         */
        "numberOfUniqueDailyValues"?: number;

        /**
         * Number of changes
         */
        "numberOfChanges"?: number;

        /**
         * Skewness
         */
        "skewness"?: number;

        /**
         * Kurtosis
         */
        "kurtosis"?: number;

        /**
         * Latitude
         */
        "latitude"?: number;

        /**
         * Longitude
         */
        "longitude"?: number;

        /**
         * Location
         */
        "location"?: string;

        /**
         * Earliest measurement start_time to be used in analysis. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
         */
        "experimentStartTime"?: Date;

        /**
         * Latest measurement start_time to be used in analysis. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
         */
        "experimentEndTime"?: Date;

        /**
         * When the record was first created. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
         */
        "createdAt"?: Date;

        /**
         * When the record in the database was last updated. Use UTC ISO 8601 \"YYYY-MM-DDThh:mm:ss\"  datetime format
         */
        "updatedAt"?: Date;

        /**
         * Outcome variables (those with `outcome` == 1) are variables for which a human would generally want to identify the influencing factors. These include symptoms of illness, physique, mood, cognitive performance, etc.  Generally correlation calculations are only performed on outcome variables
         */
        "outcome"?: boolean;

        /**
         * Comma-separated list of source names to limit variables to those sources
         */
        "sources"?: string;

        /**
         * Earliest source time
         */
        "earliestSourceTime"?: number;

        /**
         * Latest source time
         */
        "latestSourceTime"?: number;

        /**
         * Earliest measurement time
         */
        "earliestMeasurementTime"?: number;

        /**
         * Latest measurement time
         */
        "latestMeasurementTime"?: number;

        /**
         * Earliest filling time
         */
        "earliestFillingTime"?: number;

        /**
         * Latest filling time
         */
        "latestFillingTime"?: number;

        /**
         * 
         */
        "imageUrl"?: string;

        /**
         * 
         */
        "ionIcon"?: string;

    }

}
