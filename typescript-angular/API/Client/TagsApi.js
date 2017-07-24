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
/* tslint:disable:no-unused-variable member-ordering */
var API;
(function (API) {
    var Client;
    (function (Client) {
        'use strict';
        var TagsApi = (function () {
            function TagsApi($http, $httpParamSerializer, basePath) {
                this.$http = $http;
                this.$httpParamSerializer = $httpParamSerializer;
                this.basePath = 'https://app.quantimo.do/api';
                this.defaultHeaders = {};
                if (basePath !== undefined) {
                    this.basePath = basePath;
                }
            }
            TagsApi.prototype.extendObj = function (objA, objB) {
                for (var key in objB) {
                    if (objB.hasOwnProperty(key)) {
                        objA[key] = objB[key];
                    }
                }
                return objA;
            };
            /**
             * Delete user tag or ingredient
             * Delete previously created user tags or ingredients.
             * @param taggedVariableId This is the id of the variable being tagged with an ingredient or something.
             * @param tagVariableId This is the id of the ingredient variable whose value is determined based on the value of the tagged variable.
             */
            TagsApi.prototype.v1UserTagsDeletePost = function (taggedVariableId, tagVariableId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/userTags/delete';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'taggedVariableId' is not null or undefined
                if (taggedVariableId === null || taggedVariableId === undefined) {
                    throw new Error('Required parameter taggedVariableId was null or undefined when calling v1UserTagsDeletePost.');
                }
                // verify required parameter 'tagVariableId' is not null or undefined
                if (tagVariableId === null || tagVariableId === undefined) {
                    throw new Error('Required parameter tagVariableId was null or undefined when calling v1UserTagsDeletePost.');
                }
                if (taggedVariableId !== undefined) {
                    queryParameters['taggedVariableId'] = taggedVariableId;
                }
                if (tagVariableId !== undefined) {
                    queryParameters['tagVariableId'] = tagVariableId;
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            /**
             * Post or update user tags or ingredients
             * This endpoint allows users to tag foods with their ingredients.  This information will then be used to infer the user intake of the different ingredients by just entering the foods. The inferred intake levels will then be used to determine the effects of different nutrients on the user during analysis.
             * @param body Contains the new user tag data
             * @param userId User&#39;s id
             */
            TagsApi.prototype.v1UserTagsPost = function (body, userId, extraHttpRequestParams) {
                var localVarPath = this.basePath + '/v1/userTags';
                var queryParameters = {};
                var headerParams = this.extendObj({}, this.defaultHeaders);
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new Error('Required parameter body was null or undefined when calling v1UserTagsPost.');
                }
                if (userId !== undefined) {
                    queryParameters['userId'] = userId;
                }
                var httpRequestParams = {
                    method: 'POST',
                    url: localVarPath,
                    json: true,
                    data: body,
                    params: queryParameters,
                    headers: headerParams
                };
                if (extraHttpRequestParams) {
                    httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
                }
                return this.$http(httpRequestParams);
            };
            return TagsApi;
        }());
        TagsApi.$inject = ['$http', '$httpParamSerializer', 'basePath'];
        Client.TagsApi = TagsApi;
    })(Client = API.Client || (API.Client = {}));
})(API || (API = {}));