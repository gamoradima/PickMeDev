define("UsrDriver_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"columns": [
						"minmax(64px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrDriver"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "fa76bbcd-f470-48ac-8a4d-44754e38034b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_2rzd425",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_2rzd425_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcFuelMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalcFuelMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageFuelConsumption",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "DriverIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "Button_2rzd425",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": false,
					"icon": "show-merge-tag-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "DriverName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "DriverContact",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrContact_f84oixo",
					"labelPosition": "auto",
					"control": "$PDS_UsrContact_f84oixo",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ContactMobile",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.PhoneInput",
					"label": "$Resources.Strings.PDS_UsrContactMobilePhone_ns9typl",
					"control": "$PDS_UsrContactMobilePhone_ns9typl",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ContactEmail",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrContactEmail_j6ua2ke",
					"control": "$PDS_UsrContactEmail_j6ua2ke",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_kjuudnb",
					"labelPosition": "auto",
					"control": "$PDS_UsrNumber_kjuudnb",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FinanceDataArea",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"padding": {
						"top": "medium",
						"right": "large",
						"bottom": "medium",
						"left": "large"
					},
					"color": "#FDDFD5",
					"borderRadius": "medium",
					"visible": false,
					"alignItems": "stretch"
				},
				"parentName": "SideContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "SensitiveData",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrSensitiveData_ugotoc2",
					"labelPosition": "auto",
					"control": "$PDS_UsrSensitiveData_ugotoc2"
				},
				"parentName": "FinanceDataArea",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CareerStarted",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.PDS_UsrCareerStarted_14qf13y",
					"labelPosition": "auto",
					"control": "$PDS_UsrCareerStarted_14qf13y",
					"pickerType": "datetime"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LicensePlateId",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrColumn4_h1kdgf7",
					"labelPosition": "auto",
					"control": "$PDS_UsrColumn4_h1kdgf7",
					"multiline": false
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ComboBox_ffb8qbs",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_a2c1ymr",
					"labelPosition": "auto",
					"control": "$PDS_UsrStatus_a2c1ymr",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_1f2gcjn",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_1f2gcjn_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_ffb8qbs",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_crilro8",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_crilro8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_xfpqjzl",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_xfpqjzl",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Mileage",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrGeneralMileage_a8rtntf",
					"labelPosition": "auto",
					"control": "$PDS_UsrGeneralMileage_a8rtntf"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_uq4npyp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_uq4npyp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "FuelSpent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrFuelSpent_uop1ydd",
					"labelPosition": "auto",
					"control": "$PDS_UsrFuelSpent_uop1ydd"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "CarBodyType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCarBodyType_5cqaedg",
					"labelPosition": "auto",
					"control": "$PDS_UsrCarBodyType_5cqaedg",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "FuelConsumption",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrFuelConsumption_9zoeeiq",
					"labelPosition": "auto",
					"control": "$PDS_UsrFuelConsumption_9zoeeiq",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "FrontAirResistance",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCarBodyTypeUsrFrontAirResistance_qwmz73i",
					"control": "$PDS_UsrCarBodyTypeUsrFrontAirResistance_qwmz73i",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_7syq6od",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_7syq6od_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_f1vattb",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_7syq6od",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_8saum9l",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_f1vattb",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_2i2fne2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_2i2fne2_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRide",
							"defaultValues": [
								{
									"attributeName": "UsrParentDriver",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_8saum9l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_jc5i3j6",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_jc5i3j6_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_opiwo7dDS"
						}
					}
				},
				"parentName": "FlexContainer_8saum9l",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_79iyota",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_79iyota_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_8saum9l",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_m0xzcj6",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_m0xzcj6_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RideGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_79iyota",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_qss8int",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_qss8int_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRide"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_79iyota",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_eddlr6u",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_eddlr6u_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_eddlr6u_GridDetail_opiwo7d",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_opiwo7d"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_eddlr6u_SearchValue",
							"GridDetailSearchFilter_eddlr6u_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_8saum9l",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_zx70bv4",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_7syq6od",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "RideGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
					"items": "$GridDetail_opiwo7d",
					"activeRow": "$GridDetail_opiwo7d_ActiveRow",
					"selectionState": "$GridDetail_opiwo7d_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_opiwo7d_SelectionState"
					},
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_opiwo7dDS_Id",
					"columns": [
						{
							"id": "a788ffc0-4c90-c0b0-9cda-0b4f346c0047",
							"code": "GridDetail_opiwo7dDS_UsrRideStart",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_UsrRideStart)#",
							"dataValueType": 7,
							"width": 135
						},
						{
							"id": "7f60d998-21d3-1c37-337f-d2d4e0b68c9b",
							"code": "GridDetail_opiwo7dDS_UsrRideFinish",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_UsrRideFinish)#",
							"dataValueType": 7,
							"width": 123
						},
						{
							"id": "3c6ea468-2886-a958-6950-3106c886c953",
							"code": "GridDetail_opiwo7dDS_UsrPrice",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_UsrPrice)#",
							"dataValueType": 32,
							"width": 91
						},
						{
							"id": "cc0af080-2ec5-7ab5-de30-fc3ad45feb63",
							"code": "GridDetail_opiwo7dDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 133
						},
						{
							"id": "36ec451f-954a-f382-7af2-e31852fddc58",
							"code": "GridDetail_opiwo7dDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_CreatedOn)#",
							"dataValueType": 7,
							"width": 130
						},
						{
							"id": "88be9597-d0af-9166-b133-511cd28d872b",
							"code": "GridDetail_opiwo7dDS_UsrParentDriver",
							"caption": "#ResourceString(GridDetail_opiwo7dDS_UsrParentDriver)#",
							"dataValueType": 10
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_zx70bv4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_opiwo7d_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_opiwo7dDS",
							"filters": "$GridDetail_opiwo7d | crt.ToCollectionFilters : 'GridDetail_opiwo7d' : $GridDetail_opiwo7d_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_opiwo7d_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "RideGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_opiwo7d_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_opiwo7dDS",
							"filters": "$GridDetail_opiwo7d | crt.ToCollectionFilters : 'GridDetail_opiwo7d' : $GridDetail_opiwo7d_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_opiwo7d_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_opiwo7d_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_opiwo7d_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "RideGridDetail",
							"filters": "$GridDetail_opiwo7d | crt.ToCollectionFilters : 'GridDetail_opiwo7d' : $GridDetail_opiwo7d_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_opiwo7d_SelectionState"
						}
					}
				},
				"parentName": "RideGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_opiwo7d_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_opiwo7dDS",
							"filters": "$GridDetail_opiwo7d | crt.ToCollectionFilters : 'GridDetail_opiwo7d' : $GridDetail_opiwo7d_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_opiwo7d_SelectionState"
						}
					}
				},
				"parentName": "RideGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrContact_f84oixo": {
						"modelConfig": {
							"path": "PDS.UsrContact"
						}
					},
					"PDS_UsrCareerStarted_14qf13y": {
						"modelConfig": {
							"path": "PDS.UsrCareerStarted"
						}
					},
					"PDS_UsrColumn4_h1kdgf7": {
						"modelConfig": {
							"path": "PDS.UsrLicensePlateId"
						}
					},
					"PDS_UsrCarBodyType_5cqaedg": {
						"modelConfig": {
							"path": "PDS.UsrCarBodyType"
						}
					},
					"PDS_UsrStatus_a2c1ymr": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrNumber_kjuudnb": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrManager_crilro8": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrCountry_xfpqjzl": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_uq4npyp": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrSensitiveData_ugotoc2": {
						"modelConfig": {
							"path": "PDS.UsrSensitiveData"
						}
					},
					"PDS_UsrGeneralMileage_a8rtntf": {
						"modelConfig": {
							"path": "PDS.UsrGeneralMileage"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 0,
									"message": "#ResourceString(MileageCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrFuelConsumption_9zoeeiq": {
						"modelConfig": {
							"path": "PDS.UsrFuelConsumption"
						}
					},
					"PDS_UsrFuelSpent_uop1ydd": {
						"modelConfig": {
							"path": "PDS.UsrFuelSpent"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(FuelSpentCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrContactMobilePhone_ns9typl": {
						"modelConfig": {
							"path": "PDS.UsrContactMobilePhone_ns9typl"
						}
					},
					"PDS_UsrContactEmail_j6ua2ke": {
						"modelConfig": {
							"path": "PDS.UsrContactEmail_j6ua2ke"
						}
					},
					"PDS_UsrCarBodyTypeUsrFrontAirResistance_qwmz73i": {
						"modelConfig": {
							"path": "PDS.UsrCarBodyTypeUsrFrontAirResistance_qwmz73i"
						}
					},
					"GridDetail_opiwo7d": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_opiwo7dDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_eddlr6u_GridDetail_opiwo7d",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_opiwo7dDS_UsrRideStart": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.UsrRideStart"
									}
								},
								"GridDetail_opiwo7dDS_UsrRideFinish": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.UsrRideFinish"
									}
								},
								"GridDetail_opiwo7dDS_UsrPrice": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.UsrPrice"
									}
								},
								"GridDetail_opiwo7dDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.UsrCustomer"
									}
								},
								"GridDetail_opiwo7dDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.CreatedOn"
									}
								},
								"GridDetail_opiwo7dDS_UsrParentDriver": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.UsrParentDriver"
									}
								},
								"GridDetail_opiwo7dDS_Id": {
									"modelConfig": {
										"path": "GridDetail_opiwo7dDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_opiwo7dDS": [
							{
								"attributePath": "UsrParentDriver",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrDriver",
							"attributes": {
								"UsrContactMobilePhone_ns9typl": {
									"path": "UsrContact.MobilePhone",
									"type": "ForwardReference"
								},
								"UsrContactEmail_j6ua2ke": {
									"path": "UsrContact.Email",
									"type": "ForwardReference"
								},
								"UsrCarBodyTypeUsrFrontAirResistance_qwmz73i": {
									"path": "UsrCarBodyType.UsrFrontAirResistance",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_opiwo7dDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRide",
							"attributes": {
								"UsrRideStart": {
									"path": "UsrRideStart"
								},
								"UsrRideFinish": {
									"path": "UsrRideFinish"
								},
								"UsrPrice": {
									"path": "UsrPrice"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentDriver": {
									"path": "UsrParentDriver"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var licensePlate = await request.$context.PDS_UsrColumn4_h1kdgf7;
					console.log("licensePlate = " + licensePlate);
					request.$context.PDS_UsrColumn4_h1kdgf7 = licensePlate + "ABC";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrFuelSpent_uop1ydd' || 			// if Fuel changed
					   request.attributeName === 'PDS_UsrGeneralMileage_a8rtntf' ) { 		// or Mileage changed
						var fuel = await request.$context.PDS_UsrFuelSpent_uop1ydd;
						var mileage = await request.$context.PDS_UsrGeneralMileage_a8rtntf;
						var consumption = fuel / mileage * 100;
						request.$context.PDS_UsrFuelConsumption_9zoeeiq = consumption;
					}
					/* Call the next handler if it exists and return its result. */
					
					
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});