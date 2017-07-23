/**
 * QuantiModo
 * QuantiModo makes it easy to retrieve normalized user data from a wide array of devices and applications. [Learn about QuantiModo](https://quantimo.do), check out our [docs](https://github.com/QuantiModo/docs) or contact us at [help.quantimo.do](https://help.quantimo.do). 
 *
 * OpenAPI spec version: 2.0
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

    export interface Permission {
        /**
         * Grant permission to target user or public so they may access measurements within the given parameters. TODO: Rename target to something more intuitive.
         */
        "target": number;

        /**
         * ORIGINAL Variable name
         */
        "variableName": string;

        /**
         * Earliest time when measurements will be accessible in epoch seconds
         */
        "minTimestamp": number;

        /**
         * Latest time when measurements will be accessible in epoch seconds
         */
        "maxTimestamp": number;

        /**
         * Earliest time of day when measurements will be accessible in epoch seconds
         */
        "minTimeOfDay": number;

        /**
         * Latest time of day when measurements will be accessible in epoch seconds
         */
        "maxTimeOfDay": number;

        /**
         * Maybe specifies if only weekday measurements should be accessible
         */
        "week": string;

    }

}
