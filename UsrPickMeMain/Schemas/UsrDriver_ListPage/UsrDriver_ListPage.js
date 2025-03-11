define("UsrDriver_ListPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrDriver"
						}
					}
				}
			},
			{
				"operation": "remove",
				"name": "SearchFilter",
				"properties": [
					"targetAttributes"
				]
			},
			{
				"operation": "merge",
				"name": "SearchFilter",
				"values": {
					"_filterOptions": {
						"expose": [
							{
								"attribute": "SearchFilter_Items",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"Items"
										]
									}
								]
							}
						],
						"from": [
							"SearchFilter_SearchValue",
							"SearchFilter_FilteredColumnsGroups"
						]
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrDriver"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [
						{
							"id": "f252f581-0ccf-44ac-b7c9-c00df2ad9919",
							"code": "PDS_UsrName",
							"caption": "#ResourceString(PDS_UsrName)#",
							"dataValueType": 1,
							"width": 188
						},
						{
							"id": "ccb2ea54-472d-049b-da9b-e839453e811a",
							"code": "PDS_UsrCarBodyType",
							"caption": "#ResourceString(PDS_UsrCarBodyType)#",
							"dataValueType": 10,
							"width": 162
						},
						{
							"id": "a1554e89-c91e-52bb-f85e-c4085ae9020f",
							"code": "PDS_UsrCareerStarted",
							"caption": "#ResourceString(PDS_UsrCareerStarted)#",
							"dataValueType": 7,
							"width": 146
						},
						{
							"id": "9d421fec-4f73-1863-3e9f-ce08bc8ab916",
							"code": "PDS_UsrLicensePlateId",
							"caption": "#ResourceString(PDS_UsrLicensePlateId)#",
							"dataValueType": 27,
							"width": 185
						},
						{
							"id": "e8e036b4-a728-eb95-373a-604de86d0035",
							"code": "PDS_UsrNumber",
							"caption": "#ResourceString(PDS_UsrNumber)#",
							"dataValueType": 27,
							"width": 178
						},
						{
							"id": "cd528955-14ba-0dbe-3eed-303157c54fb0",
							"code": "PDS_CreatedOn",
							"caption": "#ResourceString(PDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						}
					},
					"visible": true,
					"fitContent": true
				}
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"viewModelConfig",
					"attributes"
				],
				"values": {
					"PDS_UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrCarBodyType": {
						"modelConfig": {
							"path": "PDS.UsrCarBodyType"
						}
					},
					"PDS_UsrCareerStarted": {
						"modelConfig": {
							"path": "PDS.UsrCareerStarted"
						}
					},
					"PDS_UsrLicensePlateId": {
						"modelConfig": {
							"path": "PDS.UsrLicensePlateId"
						}
					},
					"PDS_UsrNumber": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_CreatedOn": {
						"modelConfig": {
							"path": "PDS.CreatedOn"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig"
				],
				"values": {
					"filterAttributes": [
						{
							"loadOnChange": true,
							"name": "FolderTree_active_folder_filter"
						},
						{
							"name": "Items_PredefinedFilter",
							"loadOnChange": true
						},
						{
							"name": "LookupQuickFilterByTag_Items",
							"loadOnChange": true
						},
						{
							"name": "SearchFilter_Items",
							"loadOnChange": true
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrDriver",
					"attributes": {
						"UsrName": {
							"path": "UsrName"
						},
						"UsrCarBodyType": {
							"path": "UsrCarBodyType"
						},
						"UsrCareerStarted": {
							"path": "UsrCareerStarted"
						},
						"UsrLicensePlateId": {
							"path": "UsrLicensePlateId"
						},
						"UsrNumber": {
							"path": "UsrNumber"
						},
						"CreatedOn": {
							"path": "CreatedOn"
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});