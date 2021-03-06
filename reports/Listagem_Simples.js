var Relatorio = {
    "ReportVersion": "2018.2.3",
    "ReportGuid": "e124555e3a994d7c894fecd805a15efd",
    "ReportName": "Report",
    "ReportAlias": "Simple List",
    "ReportFile": "Report.mrt",
    "ReportAuthor": "Stimulsoft",
    "ReportDescription": "http://www.farsoft.com.br",
    "ReportCreated": "/Date(1085828340000-0300)/",
    "ReportChanged": "/Date(1437986952000-0300)/",
    "EngineVersion": "EngineV2",
    "CalculationMode": "Interpretation",
    "ReportUnit": "Centimeters",
    "Styles": {
        "0": {
            "Ident": "StiStyle",
            "Name": "Title1",
            "HorAlignment": "Right",
            "VertAlignment": "Center",
            "Font": ";19;;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:193,152,89",
            "AllowUseBorderSides": false
        },
        "1": {
            "Ident": "StiStyle",
            "Name": "Title2",
            "VertAlignment": "Center",
            "Font": ";9;;",
            "Border": ";102,77,38;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:102,77,38",
            "AllowUseBorderSides": false
        },
        "2": {
            "Ident": "StiStyle",
            "Name": "Header1",
            "VertAlignment": "Center",
            "Font": ";19;;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:193,152,89",
            "AllowUseBorderSides": false
        },
        "3": {
            "Ident": "StiStyle",
            "Name": "Header2",
            "HorAlignment": "Center",
            "VertAlignment": "Center",
            "Font": ";12;Bold;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:193,152,89",
            "AllowUseBorderSides": false
        },
        "4": {
            "Ident": "StiStyle",
            "Name": "Header3",
            "HorAlignment": "Center",
            "VertAlignment": "Center",
            "Font": ";9;Bold;",
            "Border": "All;193,152,89;;;;;;solid:Black",
            "Brush": "solid:242,234,221",
            "TextBrush": "solid:193,152,89",
            "AllowUseBorderSides": false
        },
        "5": {
            "Ident": "StiStyle",
            "Name": "Data1",
            "VertAlignment": "Center",
            "Font": ";9;;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:102,77,38",
            "AllowUseBorderSides": false
        },
        "6": {
            "Ident": "StiStyle",
            "Name": "Data2",
            "Font": ";9;;",
            "Border": ";;;;;;;solid:Black",
            "Brush": "solid:240,237,232",
            "TextBrush": "solid:Black",
            "AllowUseFont": false,
            "AllowUseBorderFormatting": false,
            "AllowUseBorderSides": false,
            "AllowUseTextBrush": false,
            "AllowUseTextOptions": false
        },
        "7": {
            "Ident": "StiStyle",
            "Name": "Data3",
            "VertAlignment": "Center",
            "Font": ";9;;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:240,237,232",
            "TextBrush": "solid:102,77,38",
            "AllowUseBorderSides": false
        },
        "8": {
            "Ident": "StiStyle",
            "Name": "Footer1",
            "VertAlignment": "Center",
            "Font": ";9;;",
            "Border": "Top;193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:102,77,38",
            "AllowUseBorderSides": false
        },
        "9": {
            "Ident": "StiStyle",
            "Name": "Footer2",
            "HorAlignment": "Right",
            "VertAlignment": "Center",
            "Font": ";12;Bold;",
            "Border": ";193,152,89;;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "TextBrush": "solid:193,152,89",
            "AllowUseBorderSides": false
        }
    },
    "Dictionary": {
        "DataSources": {
            "0": {
                "Ident": "StiDataTableSource",
                "Name": "Customers",
                "Alias": "Customers",
                "Columns": {
                    "0": {
                        "Name": "Address",
                        "Index": -1,
                        "NameInSource": "Address",
                        "Alias": "Address",
                        "Type": "System.String"
                    },
                    "1": {
                        "Name": "City",
                        "Index": -1,
                        "NameInSource": "City",
                        "Alias": "City",
                        "Type": "System.String"
                    },
                    "2": {
                        "Name": "CompanyName",
                        "Index": -1,
                        "NameInSource": "CompanyName",
                        "Alias": "CompanyName",
                        "Type": "System.String"
                    },
                    "3": {
                        "Name": "ContactName",
                        "Index": -1,
                        "NameInSource": "ContactName",
                        "Alias": "ContactName",
                        "Type": "System.String"
                    },
                    "4": {
                        "Name": "ContactTitle",
                        "Index": -1,
                        "NameInSource": "ContactTitle",
                        "Alias": "ContactTitle",
                        "Type": "System.String"
                    },
                    "5": {
                        "Name": "Country",
                        "Index": -1,
                        "NameInSource": "Country",
                        "Alias": "Country",
                        "Type": "System.String"
                    },
                    "6": {
                        "Name": "CustomerID",
                        "Index": -1,
                        "NameInSource": "CustomerID",
                        "Alias": "CustomerID",
                        "Type": "System.String"
                    },
                    "7": {
                        "Name": "Fax",
                        "Index": -1,
                        "NameInSource": "Fax",
                        "Alias": "Fax",
                        "Type": "System.String"
                    },
                    "8": {
                        "Name": "Phone",
                        "Index": -1,
                        "NameInSource": "Phone",
                        "Alias": "Phone",
                        "Type": "System.String"
                    },
                    "9": {
                        "Name": "PostalCode",
                        "Index": -1,
                        "NameInSource": "PostalCode",
                        "Alias": "PostalCode",
                        "Type": "System.String"
                    },
                    "10": {
                        "Name": "Region",
                        "Index": -1,
                        "NameInSource": "Region",
                        "Alias": "Region",
                        "Type": "System.String"
                    }
                },
                "NameInSource": "Demo.Customers"
            }
        }
    },
    "Pages": {
        "0": {
            "Ident": "StiPage",
            "Name": "Page1",
            "Guid": "366bfdc35bcf48f3aeb38f2b5f58db21",
            "Interaction": {
                "Ident": "StiInteraction"
            },
            "Border": ";;2;;;;;solid:Black",
            "Brush": "solid:Transparent",
            "Components": {
                "0": {
                    "Ident": "StiPageFooterBand",
                    "Name": "PageFooterBand1",
                    "ClientRectangle": "0,27.3,19,0.4",
                    "ComponentPlacement": "pf.Page1",
                    "Interaction": {
                        "Ident": "StiInteraction"
                    },
                    "Border": ";;;;;;;solid:Black",
                    "Brush": "solid:Transparent",
                    "Components": {
                        "0": {
                            "Ident": "StiText",
                            "Name": "Text6",
                            "ClientRectangle": "6.8,0,12.2,0.4",
                            "ComponentPlacement": "pf.PageFooterBand1",
                            "ComponentStyle": "Footer1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{PageNofM}"
                            },
                            "HorAlignment": "Right",
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": ";193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38"
                        }
                    }
                },
                "1": {
                    "Ident": "StiReportTitleBand",
                    "Name": "ReportTitleBand2",
                    "Guid": "0e78e53250ce4a74baab882ac9d3f6e0",
                    "ClientRectangle": "0,0.4,19,2",
                    "ComponentPlacement": "rt.Page1",
                    "Interaction": {
                        "Ident": "StiInteraction"
                    },
                    "Border": ";;;;;;;solid:Black",
                    "Brush": "solid:Transparent",
                    "Components": {
                        "0": {
                            "Ident": "StiText",
                            "Name": "Text20",
                            "Guid": "426e9ac30a6840e7b47553f34723b8df",
                            "ClientRectangle": "9.4,0,9.6,0.8",
                            "ComponentPlacement": "rt.ReportTitleBand2",
                            "ComponentStyle": "Title1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "FARSOFT SYSTEMS"
                            },
                            "HorAlignment": "Right",
                            "VertAlignment": "Center",
                            "Font": ";19;;",
                            "Border": "Bottom;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        },
                        "1": {
                            "Ident": "StiText",
                            "Name": "Text23",
                            "Guid": "1bc08e78ae20472481fe55b04ade5b6a",
                            "ClientRectangle": "0,0,9.4,0.8",
                            "ComponentPlacement": "rt.ReportTitleBand2",
                            "ComponentStyle": "Title1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Relatório Simples"
                            },
                            "VertAlignment": "Center",
                            "Font": ";19;;",
                            "Border": "Bottom;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        },
                        "2": {
                            "Ident": "StiText",
                            "Name": "Text17",
                            "Guid": "75b851754174412ab8c478e5c8479f92",
                            "CanGrow": true,
                            "ClientRectangle": "0,1,14.6,0.8",
                            "ComponentPlacement": "rt.ReportTitleBand2",
                            "ComponentStyle": "Title2",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{ReportDescription}"
                            },
                            "Font": ";9;;",
                            "Border": ";102,77,38;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            },
                            "Type": "Expression"
                        },
                        "3": {
                            "Ident": "StiText",
                            "Name": "Text18",
                            "Guid": "65f5c368912b4240a21d18c95400ea00",
                            "CanGrow": true,
                            "ClientRectangle": "14.6,1,4.4,0.8",
                            "ComponentPlacement": "rt.ReportTitleBand2",
                            "ComponentStyle": "Title2",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Date: {Today.ToString(\"Y\")}"
                            },
                            "HorAlignment": "Right",
                            "Font": ";9;;",
                            "Border": ";102,77,38;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            },
                            "Type": "Expression"
                        }
                    }
                },
                "2": {
                    "Ident": "StiHeaderBand",
                    "Name": "HeaderBand1",
                    "ClientRectangle": "0,3.2,19,0.6",
                    "ComponentPlacement": "h.ap.Page1",
                    "Interaction": {
                        "Ident": "StiInteraction"
                    },
                    "Border": ";;;;;;;solid:Black",
                    "Brush": "solid:Transparent",
                    "Components": {
                        "0": {
                            "Ident": "StiText",
                            "Name": "Text11",
                            "ClientRectangle": "6.8,0,5.2,0.6",
                            "ComponentPlacement": "h.ap.HeaderBand1",
                            "ComponentStyle": "Header3",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Endereço"
                            },
                            "HorAlignment": "Center",
                            "VertAlignment": "Center",
                            "Font": ";9;Bold;",
                            "Border": "All;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:242,234,221",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        },
                        "1": {
                            "Ident": "StiText",
                            "Name": "Text12",
                            "ShiftMode": "DecreasingSize, OnlyInWidthOfComponent",
                            "ClientRectangle": "12,0,3,0.6",
                            "ComponentPlacement": "h.ap.HeaderBand1",
                            "ComponentStyle": "Header3",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Telefone"
                            },
                            "HorAlignment": "Center",
                            "VertAlignment": "Center",
                            "Font": ";9;Bold;",
                            "Border": "All;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:242,234,221",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        },
                        "2": {
                            "Ident": "StiText",
                            "Name": "Text13",
                            "ClientRectangle": "15,0,4,0.6",
                            "ComponentPlacement": "h.ap.HeaderBand1",
                            "ComponentStyle": "Header3",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Contato"
                            },
                            "HorAlignment": "Center",
                            "VertAlignment": "Center",
                            "Font": ";9;Bold;",
                            "Border": "All;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:242,234,221",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        },
                        "3": {
                            "Ident": "StiText",
                            "Name": "Text10",
                            "ClientRectangle": "0,0,6.8,0.6",
                            "ComponentPlacement": "h.ap.HeaderBand1",
                            "ComponentStyle": "Header3",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "Empresa"
                            },
                            "HorAlignment": "Center",
                            "VertAlignment": "Center",
                            "Font": ";9;Bold;",
                            "Border": "All;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:242,234,221",
                            "TextBrush": "solid:193,152,89",
                            "Type": "Expression"
                        }
                    },
                    "PrintIfEmpty": true
                },
                "3": {
                    "Ident": "StiDataBand",
                    "Name": "DataBand1",
                    "ClientRectangle": "0,4.6,19,0.6",
                    "ComponentPlacement": "d.Page1",
                    "Interaction": {
                        "Ident": "StiBandInteraction"
                    },
                    "Border": ";;;;;;;solid:Black",
                    "Brush": "solid:Transparent",
                    "Components": {
                        "0": {
                            "Ident": "StiText",
                            "Name": "Text4",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "12,0,3,0.6",
                            "ComponentPlacement": "d.DataBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{Customers.Phone}"
                            },
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Left;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            }
                        },
                        "1": {
                            "Ident": "StiText",
                            "Name": "Text3",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "15,0,4,0.6",
                            "ComponentPlacement": "d.DataBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{Customers.ContactTitle}"
                            },
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Left, Right;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            }
                        },
                        "2": {
                            "Ident": "StiText",
                            "Name": "Text1",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "0.6,0,6.2,0.6",
                            "ComponentPlacement": "d.DataBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{Customers.CompanyName}"
                            },
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Left;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            },
                            "Type": "Expression"
                        },
                        "3": {
                            "Ident": "StiText",
                            "Name": "Text2",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "6.8,0,5.2,0.6",
                            "ComponentPlacement": "d.DataBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{Customers.Address}"
                            },
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Left;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            }
                        },
                        "4": {
                            "Ident": "StiText",
                            "Name": "Text7",
                            "Guid": "5b832677f467498487ebd4777d80e7b0",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "0,0,0.6,0.6",
                            "ComponentPlacement": "d.DataBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "Text": {
                                "Value": "{Line}"
                            },
                            "HorAlignment": "Center",
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Left;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "Type": "Expression"
                        }
                    },
                    "DataSourceName": "Customers",
                    "EvenStyle": "Data2"
                },
                "4": {
                    "Ident": "StiFooterBand",
                    "Name": "FooterBand1",
                    "ClientRectangle": "0,6,19,0.2",
                    "ComponentPlacement": "f.ap.Page1",
                    "Interaction": {
                        "Ident": "StiInteraction"
                    },
                    "Border": ";;;;;;;solid:Black",
                    "Brush": "solid:Transparent",
                    "Components": {
                        "0": {
                            "Ident": "StiText",
                            "Name": "Text8",
                            "Guid": "dcc6258185da48c0bee4c3c0395fb37d",
                            "CanGrow": true,
                            "GrowToHeight": true,
                            "ClientRectangle": "0,0,19,0.2",
                            "ComponentPlacement": "f.ap.FooterBand1",
                            "ComponentStyle": "Data1",
                            "Interaction": {
                                "Ident": "StiInteraction"
                            },
                            "VertAlignment": "Center",
                            "Font": ";9;;",
                            "Border": "Top;193,152,89;;;;;;solid:Black",
                            "Brush": "solid:Transparent",
                            "TextBrush": "solid:102,77,38",
                            "TextOptions": {
                                "WordWrap": true
                            }
                        }
                    },
                    "PrintIfEmpty": true,
                    "PrintOnAllPages": true
                }
            },
            "PageWidth": 21,
            "PageHeight": 29.7,
            "Watermark": {
                "Font": ";;Bold;",
                "TextBrush": "solid:50,0,0,0"
            },
            "Margins": {
                "Left": 1,
                "Right": 1,
                "Top": 1,
                "Bottom": 1
            }
        }
    }
}
