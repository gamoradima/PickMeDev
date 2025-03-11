define("UsrRidePage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "RideStart",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRideDS_UsrRideStart_bbvmv2g",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrRideStart_bbvmv2g"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RideFinish",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "datetime",
					"label": "$Resources.Strings.UsrRideDS_UsrRideFinish_rytukcq",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrRideFinish_rytukcq"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrRideDS_UsrPrice_6p3hun3",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrPrice_6p3hun3"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DurationTime",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"pickerType": "time",
					"label": "$Resources.Strings.UsrRideDS_UsrDurationTime_yvwnkhk",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrDurationTime_yvwnkhk"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Customer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRideDS_UsrCustomer_9o1taun",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrCustomer_9o1taun",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrRideDS_UsrComment_6dvhvhw",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrComment_6dvhvhw"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "ParentDriver",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 7,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrRideDS_UsrParentDriver_ce9be8q",
					"labelPosition": "above",
					"control": "$UsrRideDS_UsrParentDriver_ce9be8q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 6
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrRideDS_UsrRideStart_bbvmv2g": {
						"modelConfig": {
							"path": "UsrRideDS.UsrRideStart"
						}
					},
					"UsrRideDS_UsrRideFinish_rytukcq": {
						"modelConfig": {
							"path": "UsrRideDS.UsrRideFinish"
						}
					},
					"UsrRideDS_UsrPrice_6p3hun3": {
						"modelConfig": {
							"path": "UsrRideDS.UsrPrice"
						}
					},
					"UsrRideDS_UsrDurationTime_yvwnkhk": {
						"modelConfig": {
							"path": "UsrRideDS.UsrDurationTime"
						}
					},
					"UsrRideDS_UsrCustomer_9o1taun": {
						"modelConfig": {
							"path": "UsrRideDS.UsrCustomer"
						}
					},
					"UsrRideDS_UsrComment_6dvhvhw": {
						"modelConfig": {
							"path": "UsrRideDS.UsrComment"
						}
					},
					"UsrRideDS_UsrParentDriver_ce9be8q": {
						"modelConfig": {
							"path": "UsrRideDS.UsrParentDriver"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrRideDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrRide"
							}
						}
					},
					"primaryDataSourceName": "UsrRideDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});