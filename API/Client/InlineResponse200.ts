/// <reference path="api.d.ts" />

namespace API.Client {
    'use strict';

    export interface InlineResponse200 {

        data: Array<AggregatedCorrelation>;

        success: boolean;
    }

}