import { Panel } from '@/types/panel'

export const techTreePreviewPanel: Panel = {
  Collection: {
    Name: 'TechTreePreviewPanel',
    ViewPort: {
      xorigin: 4080,
      yorigin: 0,
      width: 2000,
      height: 1375,
      alignment: 'TopRight',
    },
    yclosed: 0,
    yopen: 1375,
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 2000,
            height: 1375,
            alignment: 'TopLeft',
          },
          ZPlane: 5,
          StateMaterials: {
            StateNormal: {
              Material: 'TransparentColor',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.75,
              },
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Surround',
                Name: 'TableBackground',
                ViewPort: {
                  xorigin: 970,
                  yorigin: 100,
                  width: 1740,
                  height: 1225,
                  alignment: 'TopCentre',
                },
                ZPlaneLocalOffset: 1,
                Box: {
                  xorigin: 0,
                  yorigin: 0,
                  width: 1700,
                  height: 1125,
                  alignment: 'TopLeft',
                  gridstep: 100,
                  drawbox: false,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'MarkUpTextBox',
                      Name: 'CivName',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 70,
                        width: 600,
                        height: 50,
                        alignment: 'TopLeft',
                      },
                      TextBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 600,
                        height: 50,
                        edgespace: 0,
                        linespacer: 1,
                        linesize: 50,
                        multiline: true,
                        drawbox: false,
                      },
                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 50,
                            Style: 'Normal',
                            TextColor: {
                              r: 255,
                              g: 255,
                              b: 255,
                              a: 255,
                            },
                            TextOutlineColor: {
                              r: 28,
                              g: 14,
                              b: 13,
                              a: 255,
                            },
                          },
                        },
                        StateTextDisabled: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 0.75,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextOutlineColor: {
                              r: 0.37,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'TopLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'MarkUpTextBox',
                      Name: 'CivDesc',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 120,
                        width: 1500,
                        height: 100,
                        alignment: 'TopLeft',
                      },
                      TextBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 950,
                        height: 1550,
                        edgespace: 0,
                        linespacer: 0,
                        linesize: 38,
                        multiline: true,
                        drawbox: false,
                      },
                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 200,
                              g: 200,
                              b: 255,
                              a: 255,
                            },
                            TextOutlineColor: {
                              r: 28,
                              g: 14,
                              b: 13,
                              a: 255,
                            },
                          },
                        },
                        StateTextDisabled: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 0.75,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextOutlineColor: {
                              r: 0.37,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'TopLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'MarkUpTextBox',
                      Name: 'CivBonuses',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 200,
                        width: 1200,
                        height: 1500,
                        alignment: 'TopLeft',
                      },
                      TextBox: {
                        xorigin: 0,
                        yorigin: 6,
                        width: 1200,
                        height: 1500,
                        edgespace: 0,
                        linespacer: 0,
                        linesize: 38,
                        multiline: true,
                        drawbox: false,
                      },
                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 255,
                              g: 255,
                              b: 255,
                              a: 255,
                            },
                            TextOutlineColor: {
                              r: 28,
                              g: 14,
                              b: 13,
                              a: 255,
                            },
                          },
                        },
                        StateTextDisabled: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 0.75,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextOutlineColor: {
                              r: 0.37,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'TopLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'ScrollBarVertical',
                            Name: 'TextBoxScrollBar',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 550,
                              height: 1550,
                              alignment: 'TopLeft',
                            },
                            AutoSize: false,
                            ZPlane: 2,
                            Bar: {
                              xorigin: 0,
                              yorigin: 32,
                              width: 32,
                              height: 800,
                            },
                            MinButton: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 32,
                              height: 32,
                            },
                            MaxButton: {
                              xorigin: 0,
                              yorigin: 825,
                              width: 32,
                              height: 32,
                            },
                            TabSize: {
                              width: 32,
                              height: 32,
                            },
                            StateMaterials: {
                              StateBarBackground: {
                                Material: 'ScrollBarBackground',
                              },
                              StateBarForeground: {
                                Material: 'ScrollBarBackground',
                              },
                              StateMinDisabled: {
                                Material: 'ScrollBarUpArrowNormal',
                              },
                              StateMinNormal: {
                                Material: 'ScrollBarUpArrowNormal',
                              },
                              StateMinHover: {
                                Material: 'ScrollBarUpArrowHover',
                              },
                              StateMinPressed: {
                                Material: 'ScrollBarUpArrowPressed',
                              },
                              StateMaxDisabled: {
                                Material: 'ScrollBarDownArrowNormal',
                              },
                              StateMaxNormal: {
                                Material: 'ScrollBarDownArrowNormal',
                              },
                              StateMaxHover: {
                                Material: 'ScrollBarDownArrowHover',
                              },
                              StateMaxPressed: {
                                Material: 'ScrollBarDownArrowPressed',
                              },
                              StateTabDisabled: {
                                Material: 'ScrollBarHandleNormal',
                              },
                              StateTabNormal: {
                                Material: 'ScrollBarHandleNormal',
                              },
                              StateTabHover: {
                                Material: 'ScrollBarHandleNormal',
                              },
                              StateTabPressed: {
                                Material: 'ScrollBarHandleNormal',
                              },
                            },
                            ChildWidgets: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'EconomyLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 100,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'EconomyTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 170,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Wood Upgrade',
                            IconValues: [
                              {
                                TechId: 202,
                              },
                              {
                                TechId: 203,
                              },
                              {
                                TechId: 221,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Farm Upgrade',
                            IconValues: [
                              {
                                TechId: 14,
                              },
                              {
                                TechId: 13,
                              },
                              {
                                TechId: 12,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Wheelbarrow',
                            IconValues: [
                              {
                                TechId: 213,
                              },
                              {
                                TechId: 249,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Gold Upgrade',
                            IconValues: [
                              {
                                TechId: 55,
                              },
                              {
                                TechId: 182,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Stone Upgrade',
                            IconValues: [
                              {
                                TechId: 278,
                              },
                              {
                                TechId: 279,
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'InfantryLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 240,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'InfantryTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 310,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Forging',
                            IconValues: [
                              {
                                TechId: 67,
                              },
                              {
                                TechId: 68,
                              },
                              {
                                TechId: 75,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Mail Armor',
                            IconValues: [
                              {
                                TechId: 74,
                              },
                              {
                                TechId: 76,
                              },
                              {
                                TechId: 77,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Militia Line',
                            IconValues: [
                              {
                                TechId: 207,
                              },
                              {
                                TechId: 217,
                                ExcludeCivs: true,
                                CivIds: [43],
                              },
                              {
                                TechId: 264,
                                ExcludeCivs: true,
                                CivIds: [43],
                              },
                              {
                                TechId: 885,
                                CivIds: [43],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Spearman Line',
                            IconValues: [
                              {
                                TechId: 87,
                                UnitId: 93,
                              },
                              {
                                TechId: 197,
                              },
                              {
                                TechId: 429,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Eagle Line',
                            IconValues: [
                              {
                                TechId: 433,
                                UnitId: 751,
                              },
                              {
                                TechId: 384,
                              },
                              {
                                TechId: 434,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Condottiero',
                            IconValues: [
                              {
                                TechId: 522,
                                UnitId: 882,
                                CivIds: [19],
                                TeamBonus: true,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Flemish Militia',
                            IconValues: [
                              {
                                TechId: 755,
                                UnitId: 1699,
                                CivIds: [36],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Supplies, Gambesons',
                            IconValues: [
                              {
                                TechId: 716,
                              },
                              {
                                TechId: 875,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Squires',
                            IconValues: [
                              {
                                TechId: 215,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button10',
                            ViewPort: {
                              xorigin: 825,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Arson',
                            IconValues: [
                              {
                                TechId: 602,
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ArcheryLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 380,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ArcheryTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 450,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Fletching',
                            IconValues: [
                              {
                                TechId: 199,
                              },
                              {
                                TechId: 200,
                              },
                              {
                                TechId: 201,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Archer Armor',
                            IconValues: [
                              {
                                TechId: 211,
                              },
                              {
                                TechId: 212,
                              },
                              {
                                TechId: 219,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Archer Line',
                            IconValues: [
                              {
                                TechId: 151,
                                UnitId: 4,
                              },
                              {
                                TechId: 100,
                              },
                              {
                                TechId: 237,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Skirmisher Line',
                            IconValues: [
                              {
                                TechId: 99,
                                UnitId: 7,
                              },
                              {
                                TechId: 98,
                              },
                              {
                                TechId: 655,
                                CivIds: [31],
                                TeamBonus: true,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Cavalry Archer',
                            IconValues: [
                              {
                                TechId: 192,
                                UnitId: 39,
                              },
                              {
                                TechId: 218,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Cannoneer',
                            IconValues: [
                              {
                                TechId: 85,
                                UnitId: 5,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Genitour',
                            IconValues: [
                              {
                                TechId: 601,
                                UnitId: 1010,
                                CivIds: [27],
                                TeamBonus: true,
                              },
                              {
                                TechId: 599,
                                UnitId: 1012,
                                CivIds: [27],
                                TeamBonus: true,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Slinger',
                            IconValues: [
                              {
                                TechId: 528,
                                UnitId: 185,
                                CivIds: [21],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Elephant Archer',
                            IconValues: [
                              {
                                TechId: 480,
                                UnitId: 873,
                              },
                              {
                                TechId: 481,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button10',
                            ViewPort: {
                              xorigin: 825,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Thumb Ring',
                            IconValues: [
                              {
                                TechId: 437,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button11',
                            ViewPort: {
                              xorigin: 900,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Parthian Tactics',
                            IconValues: [
                              {
                                TechId: 436,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button12',
                            ViewPort: {
                              xorigin: 975,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Ballistics',
                            IconValues: [
                              {
                                TechId: 93,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button13',
                            ViewPort: {
                              xorigin: 1050,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Chemistry',
                            IconValues: [
                              {
                                TechId: 47,
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'CavalryLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 520,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'CavalryTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 590,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Forging',
                            IconValues: [
                              {
                                TechId: 67,
                              },
                              {
                                TechId: 68,
                              },
                              {
                                TechId: 75,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Barding Armor',
                            IconValues: [
                              {
                                TechId: 81,
                              },
                              {
                                TechId: 82,
                              },
                              {
                                TechId: 80,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Scout Line',
                            IconValues: [
                              {
                                TechId: 204,
                                UnitId: 448,
                              },
                              {
                                TechId: 254,
                              },
                              {
                                TechId: 428,
                                ExcludeCivs: true,
                                CivIds: [35, 38],
                              },
                              {
                                TechId: 786,
                                CivIds: [35, 38],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Knight Line',
                            IconValues: [
                              {
                                TechId: 166,
                                UnitId: 38,
                              },
                              {
                                TechId: 209,
                              },
                              {
                                TechId: 265,
                                ExcludeCivs: true,
                                CivIds: [8],
                              },
                              {
                                TechId: 526,
                                CivIds: [8],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Camel Line',
                            IconValues: [
                              {
                                TechId: 858,
                                UnitId: 329,
                                CivIds: [42],
                              },
                              {
                                TechId: 235,
                                UnitId: 329,
                                ExcludeCivs: true,
                                CivIds: [42],
                              },
                              {
                                TechId: 860,
                                CivIds: [42],
                              },
                              {
                                TechId: 236,
                              },
                              {
                                TechId: 521,
                                CivIds: [20],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Battle Elephant',
                            IconValues: [
                              {
                                TechId: 630,
                                UnitId: 1132,
                              },
                              {
                                TechId: 631,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Steppe Lancer',
                            IconValues: [
                              {
                                TechId: 714,
                                UnitId: 1370,
                              },
                              {
                                TechId: 715,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Bloodlines',
                            IconValues: [
                              {
                                TechId: 435,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Husbandry',
                            IconValues: [
                              {
                                TechId: 39,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button10',
                            ViewPort: {
                              xorigin: 825,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Shrivamsha',
                            IconValues: [
                              {
                                TechId: 842,
                                UnitId: 1751,
                                CivIds: [42],
                              },
                              {
                                TechId: 843,
                                UnitId: 1753,
                                CivIds: [42],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'SiegeLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 660,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'SiegeTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 730,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Ram',
                            IconValues: [
                              {
                                TechId: 162,
                              },
                              {
                                TechId: 96,
                              },
                              {
                                TechId: 255,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Mangonel Line',
                            IconValues: [
                              {
                                TechId: 358,
                                UnitId: 280,
                              },
                              {
                                TechId: 257,
                              },
                              {
                                TechId: 320,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Scorpion Line',
                            IconValues: [
                              {
                                TechId: 94,
                                UnitId: 279,
                              },
                              {
                                TechId: 239,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Bombard Cannon',
                            IconValues: [
                              {
                                TechId: 188,
                                UnitId: 36,
                              },
                              {
                                TechId: 787,
                                CivIds: [39],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Armored Elephant',
                            IconValues: [
                              {
                                TechId: 837,
                                UnitId: 1744,
                              },
                              {
                                TechId: 838,
                                UnitId: 1746,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Siege Engineers',
                            IconValues: [
                              {
                                TechId: 377,
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'NavyLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 800,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'NavyTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 870,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Galley Line',
                            IconValues: [
                              {
                                TechId: 240,
                              },
                              {
                                TechId: 34,
                              },
                              {
                                TechId: 35,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Fire Galley Line',
                            IconValues: [
                              {
                                TechId: 604,
                                UnitId: 1103,
                              },
                              {
                                TechId: 34,
                                UnitId: 529,
                              },
                              {
                                TechId: 246,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Demo Ship Line',
                            IconValues: [
                              {
                                TechId: 605,
                                UnitId: 1104,
                              },
                              {
                                TechId: 34,
                                UnitId: 527,
                              },
                              {
                                TechId: 244,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Cannon Galleon',
                            IconValues: [
                              {
                                TechId: 37,
                                UnitId: 420,
                              },
                              {
                                TechId: 376,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Dromon',
                            IconValues: [
                              {
                                TechId: 886,
                                UnitId: 1795,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            IconValues: [
                              {
                                TechId: 374,
                              },
                              {
                                TechId: 375,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Button',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Shipwright',
                            IconValues: [
                              {
                                TechId: 373,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Gillnets',
                            IconValues: [
                              {
                                TechId: 65,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Longboat',
                            IconValues: [
                              {
                                TechId: 272,
                                UnitId: 250,
                                CivIds: [11],
                              },
                              {
                                TechId: 372,
                                UnitId: 533,
                                CivIds: [11],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button10',
                            ViewPort: {
                              xorigin: 825,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Caravel',
                            IconValues: [
                              {
                                TechId: 596,
                                UnitId: 1004,
                                CivIds: [24],
                              },
                              {
                                TechId: 597,
                                UnitId: 1006,
                                CivIds: [24],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button11',
                            ViewPort: {
                              xorigin: 900,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Turtle Ship',
                            IconValues: [
                              {
                                TechId: 447,
                                UnitId: 831,
                                CivIds: [18],
                              },
                              {
                                TechId: 448,
                                UnitId: 832,
                                CivIds: [18],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button12',
                            ViewPort: {
                              xorigin: 975,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Thirisadai',
                            IconValues: [
                              {
                                TechId: 841,
                                UnitId: 1750,
                                CivIds: [40],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ReligionLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 940,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ReligionTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 1010,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Redemption',
                            IconValues: [
                              {
                                TechId: 316,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Atonement',
                            IconValues: [
                              {
                                TechId: 319,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Herbal Medicine',
                            IconValues: [
                              {
                                TechId: 441,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Heresy',
                            IconValues: [
                              {
                                TechId: 439,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Sanctity',
                            IconValues: [
                              {
                                TechId: 231,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Fervor',
                            IconValues: [
                              {
                                TechId: 252,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Devotion, Faith',
                            IconValues: [
                              {
                                TechId: 46,
                              },
                              {
                                TechId: 45,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Illumination',
                            IconValues: [
                              {
                                TechId: 233,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Block Printing',
                            IconValues: [
                              {
                                TechId: 230,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button10',
                            ViewPort: {
                              xorigin: 825,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Theocracy',
                            IconValues: [
                              {
                                TechId: 438,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button11',
                            ViewPort: {
                              xorigin: 900,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Missionary',
                            IconValues: [
                              {
                                TechId: 84,
                                UnitId: 775,
                                CivIds: [14],
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button12',
                            ViewPort: {
                              xorigin: 975,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Missionary',
                            IconValues: [
                              {
                                TechId: 948,
                                UnitId: 1811,
                                CivIds: [44],
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'DefensesLabel',
                      ViewPort: {
                        xorigin: 700,
                        yorigin: 1080,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'DefensesTechs',
                      ViewPort: {
                        xorigin: 550,
                        yorigin: 1150,
                        width: 1120,
                        height: 100,
                        alignment: 'CentreLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button1',
                            ViewPort: {
                              xorigin: 150,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Masonry',
                            IconValues: [
                              {
                                TechId: 50,
                              },
                              {
                                TechId: 51,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button2',
                            ViewPort: {
                              xorigin: 225,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Fortified Wall',
                            IconValues: [
                              {
                                TechId: 194,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button3',
                            ViewPort: {
                              xorigin: 300,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Guard Tower',
                            IconValues: [
                              {
                                TechId: 127,
                                UnitId: 79,
                              },
                              {
                                TechId: 140,
                              },
                              {
                                TechId: 63,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button4',
                            ViewPort: {
                              xorigin: 375,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Bombard Tower',
                            IconValues: [
                              {
                                TechId: 64,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button5',
                            ViewPort: {
                              xorigin: 450,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Heated Shot',
                            IconValues: [
                              {
                                TechId: 380,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button6',
                            ViewPort: {
                              xorigin: 525,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Murder Holes',
                            IconValues: [
                              {
                                TechId: 322,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button7',
                            ViewPort: {
                              xorigin: 600,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Treadmill Crane',
                            IconValues: [
                              {
                                TechId: 54,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button8',
                            ViewPort: {
                              xorigin: 675,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Arrowslits',
                            IconValues: [
                              {
                                TechId: 608,
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'TechTreeButton',
                            Name: 'Button9',
                            ViewPort: {
                              xorigin: 750,
                              yorigin: 0,
                              width: 70,
                              height: 65,
                              alignment: 'TopLeft',
                            },
                            Help: 'Hoardings',
                            IconValues: [
                              {
                                TechId: 379,
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
}

export const technologyProgressPanel: Panel = {
  Collection: {
    Name: 'TechnologyProgressPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 3050,
      height: 500,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 115,
            width: 3050,
            height: 150,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          ChildWidgets: [],
        },
      },
    ],
  },
}

export const scorePanel: Panel = {
  Collection: {
    Name: 'ScorePanel',
    ViewPort: {
      xorigin: 3840,
      yorigin: 2160,
      width: 3840,
      height: 2160,
      alignment: 'BottomRight',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Surround',
          Name: 'Background',
          ViewPort: {
            xorigin: 3840,
            yorigin: 1800,
            width: 400,
            height: 400,
            alignment: 'BottomRight',
          },
          ZPlane: 1,
          Box: {
            xorigin: 3840,
            yorigin: 1800,
            width: 400,
            height: 400,
            alignment: 'BottomRight',
            gridstep: 32,
            drawbox: true,
          },
          StateMaterials: {
            StateTLDisabled: {
              Material: 'BlackPanel_TL',
            },
            StateTCDisabled: {
              Material: 'BlackPanel_TC',
            },
            StateTRDisabled: {
              Material: 'BlackPanel_TR',
            },
            StateCLDisabled: {
              Material: 'BlackPanel_CL',
            },
            StateCCDisabled: {
              Material: 'BlackPanel_CC',
            },
            StateCRDisabled: {
              Material: 'BlackPanel_CR',
            },
            StateBLDisabled: {
              Material: 'BlackPanel_BL',
            },
            StateBCDisabled: {
              Material: 'BlackPanel_BC',
            },
            StateBRDisabled: {
              Material: 'BlackPanel_BR',
            },
            StateTLNormal: {
              Material: 'BlackPanel_TL',
            },
            StateTCNormal: {
              Material: 'BlackPanel_TC',
            },
            StateTRNormal: {
              Material: 'BlackPanel_TR',
            },
            StateCLNormal: {
              Material: 'BlackPanel_CL',
            },
            StateCCNormal: {
              Material: 'BlackPanel_CC',
            },
            StateCRNormal: {
              Material: 'BlackPanel_CR',
            },
            StateBLNormal: {
              Material: 'BlackPanel_BL',
            },
            StateBCNormal: {
              Material: 'BlackPanel_BC',
            },
            StateBRNormal: {
              Material: 'BlackPanel_BR',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Anchor',
                Name: 'FontsHolder',
                Anchor: {
                  xorigin: 20,
                  yorigin: 30,
                  alignment: 'BottomRight',
                },
                StateMaterials: {
                  UserStates: 1,
                  UserState0: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 48,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                      TextOutlineWidth: 0.1,
                      TextOutlineColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
}

export const overlayPanel: Panel = {
  Collection: {
    Name: 'OverlayPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 3840,
      height: 2160,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 3840,
            height: 2160,
            alignment: 'TopLeft',
          },
          Image: {
            xorigin: 0,
            yorigin: 0,
            width: 3840,
            height: 2160,
            alignment: 'TopLeft',
          },
          test: 0,
          StateMaterials: {
            StateNormal: {
              Material: 'FlatColorAlpha',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0.8,
              },
            },
          },
          ChildWidgets: [],
        },
      },
    ],
  },
}

export const notificationPanel: Panel = {
  Collection: {
    Name: 'NotificationPanel',
    ViewPort: {
      xorigin: 40,
      yorigin: 305,
      width: 640,
      height: 1000,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Surround',
          Name: 'EventBackground',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 600,
            height: 250,
            alignment: 'TopLeft',
          },
          Box: {
            xorigin: 0,
            yorigin: 0,
            width: 600,
            height: 250,
            alignment: 'TopLeft',
            gridstep: 32,
            drawbox: true,
          },
          ZPlane: 1,
          StateMaterials: {
            StateTLDisabled: {
              Material: 'BlackPanel_TL',
            },
            StateTCDisabled: {
              Material: 'BlackPanel_TC',
            },
            StateTRDisabled: {
              Material: 'BlackPanel_TR',
            },
            StateCLDisabled: {
              Material: 'BlackPanel_CL',
            },
            StateCCDisabled: {
              Material: 'BlackPanel_CC',
            },
            StateCRDisabled: {
              Material: 'BlackPanel_CR',
            },
            StateBLDisabled: {
              Material: 'BlackPanel_BL',
            },
            StateBCDisabled: {
              Material: 'BlackPanel_BC',
            },
            StateBRDisabled: {
              Material: 'BlackPanel_BR',
            },
            StateTLNormal: {
              Material: 'BlackPanel_TL',
            },
            StateTCNormal: {
              Material: 'BlackPanel_TC',
            },
            StateTRNormal: {
              Material: 'BlackPanel_TR',
            },
            StateCLNormal: {
              Material: 'BlackPanel_CL',
            },
            StateCCNormal: {
              Material: 'BlackPanel_CC',
            },
            StateCRNormal: {
              Material: 'BlackPanel_CR',
            },
            StateBLNormal: {
              Material: 'BlackPanel_BL',
            },
            StateBCNormal: {
              Material: 'BlackPanel_BC',
            },
            StateBRNormal: {
              Material: 'BlackPanel_BR',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'MultiColorTextBox',
                Name: 'TextBox',
                ViewPort: {
                  xorigin: 10,
                  yorigin: 10,
                  width: 580,
                  height: 230,
                  alignment: 'TopLeft',
                },
                TextBox: {
                  xorigin: 0,
                  yorigin: 0,
                  width: 580,
                  height: 230,
                  edgespacer: 0,
                  linespacer: 1,
                  linesize: 40,
                  drawbox: false,
                  autoscroll: true,
                },
                StateMaterials: {
                  StateTextNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 57,
                        g: 28,
                        b: 27,
                        a: 255,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1,
                      },
                    },
                  },
                },
                TextAnchor: 'CentreLeft',
                ChildWidgets: [],
              },
            },
          ],
        },
      },
      {
        Widget: {
          Type: 'Surround',
          Name: 'ChatBackground',
          ViewPort: {
            xorigin: 0,
            yorigin: 300,
            width: 600,
            height: 500,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          Box: {
            xorigin: 0,
            yorigin: 0,
            width: 600,
            height: 500,
            alignment: 'TopLeft',
            gridstep: 32,
            drawbox: true,
          },
          StateMaterials: {
            StateTLDisabled: {
              Material: 'BlackPanel_TL',
            },
            StateTCDisabled: {
              Material: 'BlackPanel_TC',
            },
            StateTRDisabled: {
              Material: 'BlackPanel_TR',
            },
            StateCLDisabled: {
              Material: 'BlackPanel_CL',
            },
            StateCCDisabled: {
              Material: 'BlackPanel_CC',
            },
            StateCRDisabled: {
              Material: 'BlackPanel_CR',
            },
            StateBLDisabled: {
              Material: 'BlackPanel_BL',
            },
            StateBCDisabled: {
              Material: 'BlackPanel_BC',
            },
            StateBRDisabled: {
              Material: 'BlackPanel_BR',
            },
            StateTLNormal: {
              Material: 'BlackPanel_TL',
            },
            StateTCNormal: {
              Material: 'BlackPanel_TC',
            },
            StateTRNormal: {
              Material: 'BlackPanel_TR',
            },
            StateCLNormal: {
              Material: 'BlackPanel_CL',
            },
            StateCCNormal: {
              Material: 'BlackPanel_CC',
            },
            StateCRNormal: {
              Material: 'BlackPanel_CR',
            },
            StateBLNormal: {
              Material: 'BlackPanel_BL',
            },
            StateBCNormal: {
              Material: 'BlackPanel_BC',
            },
            StateBRNormal: {
              Material: 'BlackPanel_BR',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'MultiColorTextBox',
                Name: 'TextBox',
                ViewPort: {
                  xorigin: 10,
                  yorigin: 10,
                  width: 580,
                  height: 480,
                  alignment: 'TopLeft',
                },
                TextBox: {
                  xorigin: 0,
                  yorigin: 0,
                  width: 580,
                  height: 480,
                  edgespacer: 0,
                  linespacer: 1,
                  linesize: 40,
                  drawbox: false,
                  autoscroll: true,
                },
                StateMaterials: {
                  StateTextNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 57,
                        g: 28,
                        b: 27,
                        a: 255,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1,
                      },
                    },
                  },
                },
                TextAnchor: 'CentreLeft',
                ChildWidgets: [],
              },
            },
          ],
        },
      },
    ],
  },
}

export const menuPanel: Panel = {
  Collection: {
    Name: 'MenuPanel',
    ViewPort: {
      xorigin: 3840,
      yorigin: 0,
      width: 756,
      height: 276,
      alignment: 'TopRight',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 756,
            height: 276,
            alignment: 'TopLeft',
          },
          ZPlane: 11,
          StateMaterials: {
            UserStates: 1,
            UserState0: {
              Material: 'CivAsiaMenuPanel',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Button',
                Name: 'Menu',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 673,
                  yorigin: 56,
                  width: 64,
                  height: 64,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MenuMenuNormal',
                  },
                  StateHover: {
                    Material: 'MenuMenuHover',
                  },
                  StatePressed: {
                    Material: 'MenuMenuActive',
                  },
                  StateDisabled: {
                    Material: 'MenuMenuDisabled',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Diplomacy',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 500,
                  yorigin: 56,
                  width: 64,
                  height: 64,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MenuDiplomacyNormal',
                  },
                  StateHover: {
                    Material: 'MenuDiplomacyHover',
                  },
                  StatePressed: {
                    Material: 'MenuDiplomacyActive',
                  },
                  StateDisabled: {
                    Material: 'MenuDiplomacyDisabled',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Chat',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 413,
                  yorigin: 56,
                  width: 64,
                  height: 64,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MenuChatNormal',
                  },
                  StateHover: {
                    Material: 'MenuChatHover',
                  },
                  StatePressed: {
                    Material: 'MenuChatActive',
                  },
                  StateDisabled: {
                    Material: 'MenuChatDisabled',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Objectives',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 325,
                  yorigin: 56,
                  width: 64,
                  height: 64,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MenuObjectivesNormal',
                  },
                  StateHover: {
                    Material: 'MenuObjectivesHover',
                  },
                  StatePressed: {
                    Material: 'MenuObjectivesActive',
                  },
                  StateDisabled: {
                    Material: 'MenuObjectivesDisabled',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Settings',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 586,
                  yorigin: 56,
                  width: 64,
                  height: 64,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MenuSettingsNormal',
                  },
                  StateHover: {
                    Material: 'MenuSettingsHover',
                  },
                  StatePressed: {
                    Material: 'MenuSettingsActive',
                  },
                  StateDisabled: {
                    Material: 'MenuSettingsDisabled',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Techtree',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 166,
                  yorigin: 56,
                  width: 104,
                  height: 104,
                  alignment: 'CentreCentre',
                },
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'IconsMenuTechtreeAztecs',
                  },
                  StateHover: {
                    Material: 'IconsMenuTechtreeAztecsHover',
                  },
                  StatePressed: {
                    Material: 'IconsMenuTechtreeAztecsPressed',
                  },
                },
              },
            },
          ],
        },
      },
    ],
  },
}

export const gameMsgPanel: Panel = {
  Collection: {
    Name: 'GameMsgPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 3840,
      height: 2160,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_TopLeft',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 3840,
            height: 2160,
            alignment: 'TopLeft',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_TopCentre',
          ViewPort: {
            xorigin: 1920,
            yorigin: 0,
            width: 3840,
            height: 2160,
            alignment: 'TopCentre',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_TopRight',
          ViewPort: {
            xorigin: 3840,
            yorigin: 0,
            width: 3840,
            height: 2160,
            alignment: 'TopRight',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_CentreLeft',
          ViewPort: {
            xorigin: 0,
            yorigin: 1080,
            width: 3840,
            height: 2160,
            alignment: 'CentreLeft',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_CentreCentre',
          ViewPort: {
            xorigin: 1920,
            yorigin: 1080,
            width: 3840,
            height: 2160,
            alignment: 'CentreCentre',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_CentreRight',
          ViewPort: {
            xorigin: 3840,
            yorigin: 1080,
            width: 3840,
            height: 2160,
            alignment: 'CentreRight',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },

      {
        Widget: {
          Type: 'Base',
          Name: 'Background_BottomLeft',
          ViewPort: {
            xorigin: 0,
            yorigin: 2160,
            width: 3840,
            height: 2160,
            alignment: 'BottomLeft',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_BottomCentre',
          ViewPort: {
            xorigin: 1920,
            yorigin: 2160,
            width: 3840,
            height: 2160,
            alignment: 'BottomCentre',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'Background_BottomRight',
          ViewPort: {
            xorigin: 3840,
            yorigin: 2160,
            width: 3840,
            height: 2160,
            alignment: 'BottomRight',
          },
          StateMaterials: {
            StateNormal: {
              Material: 'Null',
              Color: {
                r: 0,
                g: 0,
                b: 0,
                a: 0,
              },
            },
          },
          ZPlane: 1,
        },
      },
    ],
  },
}

export const gameNotificationPanel: Panel = {
  Collection: {
    Name: 'GameNotificationPanel',
    ViewPort: {
      xorigin: 1140,
      yorigin: 110,
      width: 520,
      height: 100,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Surround',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 520,
            height: 100,
            alignment: 'TopLeft',
          },
          Box: {
            xorigin: 0,
            yorigin: 0,
            width: 520,
            height: 100,
            alignment: 'TopLeft',
            gridstep: 32,
            drawbox: true,
          },

          StateMaterials: {
            StateTLDisabled: {
              Material: 'BlackPanel_TL',
            },
            StateTCDisabled: {
              Material: 'BlackPanel_TC',
            },
            StateTRDisabled: {
              Material: 'BlackPanel_TR',
            },
            StateCLDisabled: {
              Material: 'BlackPanel_CL',
            },
            StateCCDisabled: {
              Material: 'BlackPanel_CC',
            },
            StateCRDisabled: {
              Material: 'BlackPanel_CR',
            },
            StateBLDisabled: {
              Material: 'BlackPanel_BL',
            },
            StateBCDisabled: {
              Material: 'BlackPanel_BC',
            },
            StateBRDisabled: {
              Material: 'BlackPanel_BR',
            },
            StateTLNormal: {
              Material: 'BlackPanel_TL',
            },
            StateTCNormal: {
              Material: 'BlackPanel_TC',
            },
            StateTRNormal: {
              Material: 'BlackPanel_TR',
            },
            StateCLNormal: {
              Material: 'BlackPanel_CL',
            },
            StateCCNormal: {
              Material: 'BlackPanel_CC',
            },
            StateCRNormal: {
              Material: 'BlackPanel_CR',
            },
            StateBLNormal: {
              Material: 'BlackPanel_BL',
            },
            StateBCNormal: {
              Material: 'BlackPanel_BC',
            },
            StateBRNormal: {
              Material: 'BlackPanel_BR',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Anchor',
                Name: 'DefeatAnchor',
                Anchor: {
                  xorigin: 0,
                  yorigin: 0,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'PlayerCivIcon',
                      ViewPort: {
                        xorigin: 50,
                        yorigin: 50,
                        width: 75,
                        height: 75,
                        alignment: 'CentreCentre',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 255,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },

                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'ButtonPlayerNumberIcon',
                      ClickSound: '?button_ui',
                      ViewPort: {
                        xorigin: 120,
                        yorigin: 50,
                        width: 42,
                        height: 42,
                        alignment: 'CentreCentre',
                      },
                      disabled: true,
                      StateMaterials: {
                        StateDisabled: {
                          Material: 'None',
                          Font: {
                            FontIndex: 0,
                            PointSize: 30,
                            Style: 'Normal',
                            TextColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'CentreCentre',
                    },
                  },
                  {
                    Widget: {
                      Type: 'TextBox',
                      Name: 'PlayerName',
                      ViewPort: {
                        xorigin: 144.5,
                        yorigin: 0,
                        width: 365.5,
                        height: 100,
                        alignment: 'TopLeft',
                      },
                      TextBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 365.5,
                        height: 100,
                        edgespacer: 1,
                        linespacer: 1,
                        linesize: 40,
                        drawbox: false,
                        multiline: true,
                      },
                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 40,
                            Style: 'Normal',
                            TextColor: {
                              r: 255,
                              g: 0,
                              b: 0,
                              a: 255,
                            },
                          },
                        },
                      },
                      Text: 'Ashley was defeated',
                      TextAnchor: 'CentreLeft',
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Anchor',
                Name: 'ObjectiveChangeAnchor',
                Anchor: {
                  xorigin: 0,
                  yorigin: 0,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'TextBox',
                      Name: 'ObjectiveText',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 520,
                        height: 100,
                        alignment: 'TopLeft',
                      },
                      TextBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 520,
                        height: 100,
                        edgespacer: 1,
                        linespacer: 1,
                        linesize: 40,
                        drawbox: false,
                        multiline: true,
                      },
                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 40,
                            Style: 'Normal',
                            TextColor: {
                              r: 255,
                              g: 0,
                              b: 0,
                              a: 255,
                            },
                          },
                        },
                      },
                      Text: 'Ashley was defeated',
                      TextAnchor: 'CentreCentre',
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
}

export const commandPanel: Panel = {
  Collection: {
    Name: 'CommandPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 2159,
      width: 2246,
      height: 413,
      alignment: 'BottomLeft',
    },
    ActionButtonMaterialDisabled: 'ButtonCmdIconDisabled',
    ActionButtonMaterialNormal: 'ButtonCmdIconNormal',
    ActionButtonMaterialHover: 'ButtonCmdIconHover',
    ActionButtonMaterialActive: 'ButtonCmdIconActive',
    ActionButtonFont: {
      FontIndex: 0,
      PointSize: 34,
      Style: 'Normal',
    },
    xclosed: 1178,
    xopen: 2404,
    xclip: 560,
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'BackgroundRight',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 1888,
            height: 413,
            alignment: 'TopRight',
          },
          ZPlane: 1,
          Image: {
            xorigin: 0,
            yorigin: 0,
            width: 1368,
            height: 413,
            alignment: 'TopLeft',
          },
          StateMaterials: {
            UserStates: 2,
            UserState0: {
              Material: 'CivAsiaSingleSelectionPanel',
            },
            UserState1: {
              Material: 'CivAsiaRecordPanelTableFull',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Name: 'StatTablesAnchor',
                Type: 'Anchor',
                Anchor: {
                  xorigin: 0,
                  yorigin: 0,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Name: 'MilitaryStatsAnchor',
                      Type: 'Anchor',
                      Anchor: {
                        xorigin: 0,
                        yorigin: 0,
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Name: 'HeaderAnchor',
                            Type: 'Anchor',
                            Anchor: {
                              xorigin: 33,
                              yorigin: 84,
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'MilitaryHeaderLabel',
                                  ViewPort: {
                                    xorigin: 0,
                                    yorigin: 0,
                                    width: 420,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreLeft',
                                  TextOffset: {
                                    xoffset: 10,
                                    yoffset: 0,
                                  },
                                  Text: 9886,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'InfantryHeaderLabel',
                                  ViewPort: {
                                    xorigin: 420,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 12401,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'RangedHeaderLabel',
                                  ViewPort: {
                                    xorigin: 530,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300040,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'CavalryHeaderLabel',
                                  ViewPort: {
                                    xorigin: 640,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 12408,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'SiegeHeaderLabel',
                                  ViewPort: {
                                    xorigin: 750,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300041,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'CavArchHeaderLabel',
                                  ViewPort: {
                                    xorigin: 860,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300042,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'ShipsHeaderLabel',
                                  ViewPort: {
                                    xorigin: 970,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300043,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'MonksHeaderLabel',
                                  ViewPort: {
                                    xorigin: 1080,
                                    yorigin: 0,
                                    width: 110,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 12425,
                                  ChildWidgets: [],
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'ListBox',
                            Name: 'ListBox',
                            ViewPort: {
                              xorigin: 33,
                              yorigin: 116,
                              width: 1190,
                              height: 262,
                              alignment: 'TopLeft',
                            },
                            Help: 300392,
                            ListBox: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 1190,
                              height: 270,
                              drawbox: false,
                              gridstep: 0,
                              edgespacer: 0,
                              linespacer: 1.5,
                              linesize: 30,
                              columnwidths: [
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 330,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                                {
                                  width: 110,
                                },
                              ],
                            },
                            StateMaterials: {
                              StateTextNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextSelected: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextHilighted: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextPressed: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextAlternateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 171,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Name: 'OverviewStatsAnchor',
                      Type: 'Anchor',
                      Anchor: {
                        xorigin: 0,
                        yorigin: 0,
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Name: 'HeaderAnchor',
                            Type: 'Anchor',
                            Anchor: {
                              xorigin: 33,
                              yorigin: 84,
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'HeaderLabel',
                                  ViewPort: {
                                    xorigin: 0,
                                    yorigin: 0,
                                    width: 420,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreLeft',
                                  TextOffset: {
                                    xoffset: 10,
                                    yoffset: 0,
                                  },
                                  Text: 300044,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'PopulationHeaderLabel',
                                  ViewPort: {
                                    xorigin: 420,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 4313,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'VillagerHeaderLabel',
                                  ViewPort: {
                                    xorigin: 574,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 14121,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'IdleHeaderLabel',
                                  ViewPort: {
                                    xorigin: 728,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300045,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'MilitaryHeaderLabel',
                                  ViewPort: {
                                    xorigin: 882,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 9886,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'KillsDeathsHeaderLabel',
                                  ViewPort: {
                                    xorigin: 1036,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300046,
                                  ChildWidgets: [],
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'ListBox',
                            Name: 'ListBox',
                            ViewPort: {
                              xorigin: 33,
                              yorigin: 116,
                              width: 1190,
                              height: 262,
                              alignment: 'TopLeft',
                            },
                            Help: 300390,
                            ListBox: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 1190,
                              height: 270,
                              drawbox: false,
                              gridstep: 0,
                              edgespacer: 0,
                              linespacer: 1.5,
                              linesize: 30,
                              columnwidths: [
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 330,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                              ],
                            },
                            StateMaterials: {
                              StateTextNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextSelected: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextHilighted: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextPressed: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextAlternateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 171,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Name: 'ScoreStatsAnchor',
                      Type: 'Anchor',
                      Anchor: {
                        xorigin: 0,
                        yorigin: 0,
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Name: 'HeaderAnchor',
                            Type: 'Anchor',
                            Anchor: {
                              xorigin: 33,
                              yorigin: 84,
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'HeaderLabel',
                                  ViewPort: {
                                    xorigin: 0,
                                    yorigin: 0,
                                    width: 420,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreLeft',
                                  TextOffset: {
                                    xoffset: 10,
                                    yoffset: 0,
                                  },
                                  Text: 4132,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'TotalScoreHeaderLabel',
                                  ViewPort: {
                                    xorigin: 420,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 9890,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'MilitaryHeaderLabel',
                                  ViewPort: {
                                    xorigin: 574,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 9886,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'EconomyHeaderLabel',
                                  ViewPort: {
                                    xorigin: 728,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 9887,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'TechHeaderLabel',
                                  ViewPort: {
                                    xorigin: 882,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 300047,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'SocietyDeathsHeaderLabel',
                                  ViewPort: {
                                    xorigin: 1036,
                                    yorigin: 0,
                                    width: 154,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 9889,
                                  ChildWidgets: [],
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'ListBox',
                            Name: 'ListBox',
                            ViewPort: {
                              xorigin: 33,
                              yorigin: 116,
                              width: 1190,
                              height: 262,
                              alignment: 'TopLeft',
                            },
                            Help: 300389,
                            ListBox: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 1190,
                              height: 270,
                              drawbox: false,
                              gridstep: 0,
                              edgespacer: 0,
                              linespacer: 1.5,
                              linesize: 30,
                              columnwidths: [
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 330,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                                {
                                  width: 154,
                                },
                              ],
                            },
                            StateMaterials: {
                              StateTextNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextSelected: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextHilighted: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextPressed: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextAlternateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 171,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Name: 'EconomyStatsAnchor',
                      Type: 'Anchor',
                      Anchor: {
                        xorigin: 0,
                        yorigin: 0,
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Name: 'HeaderAnchor',
                            Type: 'Anchor',
                            Anchor: {
                              xorigin: 33,
                              yorigin: 84,
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'HeaderLabel',
                                  ViewPort: {
                                    xorigin: 0,
                                    yorigin: 0,
                                    width: 420,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreLeft',
                                  TextOffset: {
                                    xoffset: 10,
                                    yoffset: 0,
                                  },
                                  Text: 9887,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'FoodHeaderLabel',
                                  ViewPort: {
                                    xorigin: 470,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 10251,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'WoodHeaderLabel',
                                  ViewPort: {
                                    xorigin: 590,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 10252,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'GoldHeaderLabel',
                                  ViewPort: {
                                    xorigin: 710,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 10254,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'StoneHeaderLabel',
                                  ViewPort: {
                                    xorigin: 830,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 10253,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'VillagerHeaderLabel',
                                  ViewPort: {
                                    xorigin: 950,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 14121,
                                  ChildWidgets: [],
                                },
                              },
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'RelicHeaderLabel',
                                  ViewPort: {
                                    xorigin: 1070,
                                    yorigin: 0,
                                    width: 120,
                                    height: 30,
                                    alignment: 'TopLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 2,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  TextAnchor: 'CentreCentre',
                                  TextOffset: {
                                    xoffset: 0,
                                    yoffset: 0,
                                  },
                                  Text: 13342,
                                  ChildWidgets: [],
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'ListBox',
                            Name: 'ListBox',
                            ViewPort: {
                              xorigin: 33,
                              yorigin: 116,
                              width: 1190,
                              height: 262,
                              alignment: 'TopLeft',
                            },
                            Help: 300391,
                            ListBox: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 1190,
                              height: 270,
                              drawbox: false,
                              gridstep: 0,
                              edgespacer: 0,
                              linespacer: 1.5,
                              linesize: 30,
                              columnwidths: [
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 30,
                                },
                                {
                                  width: 350,
                                },
                                {
                                  width: 120,
                                },
                                {
                                  width: 120,
                                },
                                {
                                  width: 120,
                                },
                                {
                                  width: 120,
                                },
                                {
                                  width: 120,
                                },
                                {
                                  width: 120,
                                },
                              ],
                            },
                            StateMaterials: {
                              StateTextNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextSelected: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextHilighted: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextPressed: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextAlternateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 30,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 171,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                            },
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'CivEmblem',
                ViewPort: {
                  xorigin: 403,
                  yorigin: 93,
                  width: 450,
                  height: 280,
                  alignment: 'TopLeft',
                },

                StateMaterials: {
                  UserStates: 1,
                  UserState0: {
                    Material: 'CivEmblem',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonCollapse',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 1253,
                  yorigin: 48,
                  width: 38,
                  height: 51,
                  alignment: 'TopLeft',
                },
                AccessibilityTextOverride:
                  'IDS_COMMAND_PANEL_COLLAPSE_ACCESSIBILITY_TEXT',

                StateMaterials: {
                  StateDisabled: {
                    Material: 'CollapseButtonNormal',
                  },
                  StateNormal: {
                    Material: 'CollapseButtonNormal',
                  },
                  StateHover: {
                    Material: 'CollapseButtonHover',
                  },
                  StatePressed: {
                    Material: 'CollapseButtonActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonExpand',
                ClickSound: '?button_ui',
                show: false,
                ViewPort: {
                  xorigin: 1256,
                  yorigin: 48,
                  width: 38,
                  height: 50,
                  alignment: 'TopLeft',
                },
                AccessibilityTextOverride:
                  'IDS_COMMAND_PANEL_EXPAND_ACCESSIBILITY_TEXT',
                StateMaterials: {
                  StateDisabled: {
                    Material: 'ExpandButtonNormal',
                  },
                  StateNormal: {
                    Material: 'ExpandButtonNormal',
                  },
                  StateHover: {
                    Material: 'ExpandButtonHover',
                  },
                  StatePressed: {
                    Material: 'ExpandButtonActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'ClipArea',
                Name: 'Clipped',
                ViewPort: {
                  xorigin: 10,
                  yorigin: 70,
                  width: 1300,
                  height: 400,
                  alignment: 'TopLeft',
                },
                Image: {
                  xorigin: 1300,
                  yorigin: 80,
                  width: 1300,
                  height: 400,
                  alignment: 'TopRight',
                },

                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ObjectName',
                      ViewPort: {
                        xorigin: 58,
                        yorigin: 44,
                        width: 500,
                        height: 42,
                        alignment: 'CentreLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 2,
                            PointSize: 40,
                            Style: 'Normal',
                            TextColor: {
                              r: 57,
                              g: 28,
                              b: 27,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'ObjectImage',
                      ViewPort: {
                        xorigin: 60,
                        yorigin: 60,
                        width: 120,
                        height: 120,
                        alignment: 'TopLeft',
                      },
                      Help: 300188,
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'HPBack',
                      ViewPort: {
                        xorigin: 60,
                        yorigin: 182,
                        width: 120,
                        height: 14,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 57,
                            g: 28,
                            b: 27,
                            a: 255,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'HPLegacyBack',
                      ViewPort: {
                        xorigin: 62,
                        yorigin: 184,
                        width: 116,
                        height: 10,
                        alignment: 'TopLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 1,
                            g: 0,
                            b: 0,
                            a: 1,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'ProgressBar',
                      Name: 'HPProgress',
                      ViewPort: {
                        xorigin: 62,
                        yorigin: 184,
                        width: 116,
                        height: 10,
                        alignment: 'TopLeft',
                      },
                      Help: 42021,
                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 1,
                            g: 0,
                            b: 0,
                            a: 1,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'ChargeBack',
                      ViewPort: {
                        xorigin: 60,
                        yorigin: 196,
                        width: 120,
                        height: 14,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 57,
                            g: 28,
                            b: 27,
                            a: 255,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'ChargeLegacyBack',
                      ViewPort: {
                        xorigin: 62,
                        yorigin: 198,
                        width: 116,
                        height: 10,
                        alignment: 'TopLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 1,
                            g: 0,
                            b: 0,
                            a: 1,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'ProgressBar',
                      Name: 'ChargeProgress',
                      ViewPort: {
                        xorigin: 62,
                        yorigin: 198,
                        width: 116,
                        height: 10,
                        alignment: 'TopLeft',
                      },
                      Help: 42231,
                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 1,
                            g: 0,
                            b: 0,
                            a: 1,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ObjectHealth',
                      ViewPort: {
                        xorigin: 55,
                        yorigin: 225,
                        width: 200,
                        height: 40,
                        alignment: 'CentreLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 57,
                              g: 28,
                              b: 27,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'CentreLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'StatIconHpRegeneration',
                      ViewPort: {
                        xorigin: 55,
                        yorigin: 250,
                        width: 200,
                        height: 50,

                        alignment: 'TopLeft',
                      },
                      ZPlaneLocalOffset: 1,
                      Help: 12309,
                      StateMaterials: {
                        UserStates: 1,
                        UserState0: {
                          Material: 'StatIconsHpRegeneration',
                        },
                      },
                      Image: {
                        xorigin: 20,
                        yorigin: 15,
                        width: 40,
                        height: 40,
                        alignment: 'CentreCentre',
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Label',
                            Name: 'Label',
                            ViewPort: {
                              xorigin: 40,
                              yorigin: 15,
                              width: 120,
                              height: 60,
                              alignment: 'CentreLeft',
                            },

                            StateMaterials: {
                              StateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 32,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            Text: '000000',
                            TextAnchor: 'CentreLeft',
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ObjectOwnerNameCulture',
                      ViewPort: {
                        xorigin: 380,
                        yorigin: 44,
                        width: 800,
                        height: 40,
                        alignment: 'CentreLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 2,
                            PointSize: 40,
                            Style: 'Outlined',
                            AllowGameModeTextColorOverride: false,
                            TextColor: {
                              r: 57,
                              g: 28,
                              b: 27,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'CentreRight',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'ObjectOwnerStance',
                      ViewPort: {
                        xorigin: 780,
                        yorigin: 80,
                        width: 400,
                        height: 40,
                        alignment: 'CentreLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 2,
                            PointSize: 40,
                            Style: 'Outlined',
                            TextColor: {
                              r: 57,
                              g: 28,
                              b: 27,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'CentreRight',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Anchor',
                      Name: 'ObjectStats',
                      Anchor: {
                        xorigin: 190,
                        yorigin: 60,
                        alignment: 'TopLeft',
                      },

                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconWood',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsWood',
                              },
                            },
                            Image: {
                              xorigin: 24,
                              yorigin: 15,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconFood',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsFood',
                              },
                            },
                            Image: {
                              xorigin: 28,
                              yorigin: 20,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconStone',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsStone',
                              },
                            },
                            Image: {
                              xorigin: 24,
                              yorigin: 15,
                              width: 38,
                              height: 38,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconGold',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsGold',
                              },
                            },
                            Image: {
                              xorigin: 24,
                              yorigin: 15,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconGarrison',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsGarrison',
                              },
                            },
                            Image: {
                              xorigin: 26,
                              yorigin: 22,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconTransport',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,
                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsTransport',
                              },
                            },
                            Image: {
                              xorigin: 15,
                              yorigin: 15,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconRange',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsRange',
                              },
                            },
                            Image: {
                              xorigin: 32,
                              yorigin: 20,
                              width: 42,
                              height: 42,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconDamage',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 180,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsDamage',
                              },
                            },
                            Image: {
                              xorigin: 26,
                              yorigin: 20,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconArmor',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,
                              alignment: 'TopLeft',
                            },
                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsArmor',
                              },
                            },
                            Image: {
                              xorigin: 30,
                              yorigin: 15,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 0,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },
                                  ClippingOverride: 'BackgroundRight',
                                  AutoSize: true,
                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconHp',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsHp',
                              },
                            },
                            Image: {
                              xorigin: 25,
                              yorigin: 15,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconConvert',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsConvert',
                              },
                            },
                            Image: {
                              xorigin: 30,
                              yorigin: 20,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 20,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconRange-Armor',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 160,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsRange-Armor',
                              },
                            },
                            Image: {
                              xorigin: 15,
                              yorigin: 15,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 110,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconReloadTime',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsReloadTime',
                              },
                            },
                            Image: {
                              xorigin: 30,
                              yorigin: 20,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 20,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconMovementSpeed',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsMovementSpeed',
                              },
                            },
                            Image: {
                              xorigin: 25,
                              yorigin: 20,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 20,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconWorkrate',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsWorkrate',
                              },
                            },
                            Image: {
                              xorigin: 25,
                              yorigin: 20,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 20,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconBlastRadius',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsBlastRadius',
                              },
                            },
                            Image: {
                              xorigin: 28,
                              yorigin: 17,
                              width: 38,
                              height: 38,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconPierceAttack',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsPierceAttack',
                              },
                            },
                            Image: {
                              xorigin: 27,
                              yorigin: 15,
                              width: 50,
                              height: 50,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                        {
                          Widget: {
                            Type: 'Base',
                            Name: 'StatIconPowerUp',
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 200,
                              height: 50,

                              alignment: 'TopLeft',
                            },

                            StateMaterials: {
                              UserStates: 1,
                              UserState0: {
                                Material: 'StatIconsPowerUp',
                              },
                            },
                            Image: {
                              xorigin: 27,
                              yorigin: 20,
                              width: 40,
                              height: 40,
                              alignment: 'CentreCentre',
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'Label',
                                  Name: 'Label',
                                  ViewPort: {
                                    xorigin: 60,
                                    yorigin: 15,
                                    width: 120,
                                    height: 60,
                                    alignment: 'CentreLeft',
                                  },

                                  StateMaterials: {
                                    StateNormal: {
                                      Font: {
                                        FontIndex: 0,
                                        PointSize: 32,
                                        Style: 'Normal',
                                        TextColor: {
                                          r: 57,
                                          g: 28,
                                          b: 27,
                                          a: 255,
                                        },
                                      },
                                    },
                                  },
                                  Text: 'Test',
                                  TextAnchor: 'CentreLeft',
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'TextBox',
                      Name: 'StatusLabel',
                      ViewPort: {
                        xorigin: 480,
                        yorigin: 60,
                        width: 480,
                        height: 128,
                        alignment: 'TopLeft',
                      },

                      TextBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 480,
                        height: 128,
                        edgespace: 0,
                        linespacer: 1,
                        linesize: 38,
                        multiline: true,
                        drawbox: false,
                      },

                      StateMaterials: {
                        StateTextNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 57,
                              g: 28,
                              b: 27,
                              a: 255,
                            },
                            TextOutlineColor: {
                              r: 28,
                              g: 14,
                              b: 13,
                              a: 255,
                            },
                          },
                        },
                        StateTextDisabled: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 38,
                            Style: 'Normal',
                            TextColor: {
                              r: 0.75,
                              g: 0.0,
                              b: 0.0,
                              a: 1.0,
                            },
                            TextOutlineColor: {
                              r: 0.37,
                              g: 0.0,
                              b: 0.0,
                              a: 1.0,
                            },
                          },
                        },
                      },
                      Text: '',
                      TextAnchor: 'TopLeft',
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Base',
                      Name: 'ProgressBack',
                      ViewPort: {
                        xorigin: 400,
                        yorigin: 135,
                        width: 280,
                        height: 20,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 57,
                            g: 28,
                            b: 27,
                            a: 255,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'ProgressBar',
                      Name: 'Progress',
                      ViewPort: {
                        xorigin: 400,
                        yorigin: 135,
                        width: 280,
                        height: 20,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'FlatColor',
                          Color: {
                            r: 1,
                            g: 0,
                            b: 0,
                            a: 1,
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Anchor',
                      Name: 'QueueButtons',
                      Anchor: {
                        xorigin: 0,
                        yorigin: 0,
                        alignment: 'TopLeft',
                      },
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Anchor',
                Name: 'GroupButtons',
                Anchor: {
                  xorigin: 590,
                  yorigin: 412,
                  alignment: 'TopRight',
                },
                ZPlane: 8,
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button0',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: -80,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button1',
                      ViewPort: {
                        xorigin: 80,
                        yorigin: -80,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button2',
                      ViewPort: {
                        xorigin: 160,
                        yorigin: -80,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button3',
                      ViewPort: {
                        xorigin: 240,
                        yorigin: -80,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button4',
                      ViewPort: {
                        xorigin: 320,
                        yorigin: -80,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button5',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: -160,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button6',
                      ViewPort: {
                        xorigin: 80,
                        yorigin: -160,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button7',
                      ViewPort: {
                        xorigin: 160,
                        yorigin: -160,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button8',
                      ViewPort: {
                        xorigin: 240,
                        yorigin: -160,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button9',
                      ViewPort: {
                        xorigin: 320,
                        yorigin: -160,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button10',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button11',
                      ViewPort: {
                        xorigin: 80,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button12',
                      ViewPort: {
                        xorigin: 160,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button13',
                      ViewPort: {
                        xorigin: 240,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button14',
                      ViewPort: {
                        xorigin: 320,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button15',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: -320,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button16',
                      ViewPort: {
                        xorigin: 80,
                        yorigin: -320,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button17',
                      ViewPort: {
                        xorigin: 160,
                        yorigin: -320,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button18',
                      ViewPort: {
                        xorigin: 240,
                        yorigin: -320,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button19',
                      ViewPort: {
                        xorigin: 320,
                        yorigin: -320,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button20',
                      ViewPort: {
                        xorigin: -80,
                        yorigin: -240,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateNormal: {
                          Material: 'CtrlGroupBorder',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'CtrlGroupBorderHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'CtrlGroupBorderActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextColor: {
                              r: 242,
                              g: 210,
                              b: 182,
                              a: 255,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      {
        Widget: {
          Type: 'Base',
          Name: 'BackgroundLeft',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 660,
            height: 413,
            alignment: 'TopLeft',
          },
          ZPlane: 7,
          StateMaterials: {
            UserStates: 2,
            UserState0: {
              Material: 'CivAsiaCommandPanelCollapsed',
            },
            UserState1: {
              Material: 'CivAsiaCommandPanelExtended',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Anchor',
                Name: 'Buttons',
                Anchor: {
                  xorigin: 45,
                  yorigin: 90,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button11',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button21',
                      ViewPort: {
                        xorigin: 94,
                        yorigin: 0,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button31',
                      ViewPort: {
                        xorigin: 188,
                        yorigin: 0,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button41',
                      ViewPort: {
                        xorigin: 282,
                        yorigin: 0,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button51',
                      ViewPort: {
                        xorigin: 376,
                        yorigin: 0,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button12',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 94,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button22',
                      ViewPort: {
                        xorigin: 94,
                        yorigin: 94,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button32',
                      ViewPort: {
                        xorigin: 188,
                        yorigin: 94,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button42',
                      ViewPort: {
                        xorigin: 282,
                        yorigin: 94,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button52',
                      ViewPort: {
                        xorigin: 376,
                        yorigin: 94,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button13',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 188,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button23',
                      ViewPort: {
                        xorigin: 94,
                        yorigin: 188,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button33',
                      ViewPort: {
                        xorigin: 188,
                        yorigin: 188,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button43',
                      ViewPort: {
                        xorigin: 282,
                        yorigin: 188,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CommandButton',
                      Name: 'Button53',
                      ViewPort: {
                        xorigin: 376,
                        yorigin: 188,
                        width: 80,
                        height: 80,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'ButtonCmdIconDisabled',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0.5,
                              g: 0.5,
                              b: 0.5,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateNormal: {
                          Material: 'ButtonCmdIconNormal',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StateHover: {
                          Material: 'ButtonCmdIconHover',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                        StatePressed: {
                          Material: 'ButtonCmdIconActive',
                          Font: {
                            FontIndex: 0,
                            PointSize: 34,
                            Style: 'Normal',
                            TextOutlineWidth: 0.35,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                          },
                        },
                      },
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Anchor',
                Name: 'ReplayButtons',
                Anchor: {
                  xorigin: 45,
                  yorigin: 92,
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'ButtonSwitchStatView',
                      ClickSound: '?button_ui',
                      ViewPort: {
                        xorigin: 410,
                        yorigin: 60,
                        width: 80,
                        height: 80,
                        alignment: 'CentreCentre',
                      },
                      Help: 300388,
                      StateMaterials: {
                        StateDisabled: {
                          Material: 'MinimapFilterAllNormal',
                        },
                        StateNormal: {
                          Material: 'MinimapFilterAllNormal',
                        },
                        StateHover: {
                          Material: 'MinimapFilterAllHover',
                        },
                        StatePressed: {
                          Material: 'MinimapFilterAllActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'DropDown',
                      AccessibilityName: 'IDS_NARRATOR_CHOSEN_PLAYER',
                      Name: 'WatchPlayer',
                      Help: 300105,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 6,
                        width: 343,
                        height: 41,
                        alignment: 'TopLeft',
                      },

                      ValueBox: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 343,
                        height: 41,
                        widthleft: 22,
                        widthright: 22,
                        edgespacer: 8,
                      },
                      Button: {
                        xorigin: 298,
                        yorigin: 12,
                        width: 31,
                        height: 23,
                      },
                      StateMaterials: {
                        StateLeftValueDisabled: {
                          Material: 'DropDownLeftValueDisabled',
                        },
                        StateLeftValueNormal: {
                          Material: 'DropDownLeftValueNormal',
                        },
                        StateLeftValueHover: {
                          Material: 'DropDownLeftValueHover',
                        },
                        StateMidValueDisabled: {
                          Material: 'DropDownMidValueDisabled',
                        },
                        StateMidValueNormal: {
                          Material: 'DropDownMidValueNormal',
                        },
                        StateMidValueHover: {
                          Material: 'DropDownMidValueHover',
                        },
                        StateRightValueDisabled: {
                          Material: 'DropDownRightValueDisabled',
                        },
                        StateRightValueNormal: {
                          Material: 'DropDownRightValueNormal',
                        },
                        StateRightValueHover: {
                          Material: 'DropDownRightValueHover',
                        },
                        StateButtonClosedDisabled: {
                          Material: 'DropDownButtonClosedDisabled',
                        },
                        StateButtonClosedNormal: {
                          Material: 'DropDownButtonClosedNormal',
                        },
                        StateButtonClosedHover: {
                          Material: 'DropDownButtonClosedHover',
                        },
                        StateButtonClosedPressed: {
                          Material: 'DropDownButtonClosedPressed',
                        },
                        StateButtonOpenNormal: {
                          Material: 'DropDownButtonOpenNormal',
                        },
                        StateButtonOpenHover: {
                          Material: 'DropDownButtonOpenHover',
                        },
                        StateButtonOpenPressed: {
                          Material: 'DropDownButtonOpenPressed',
                        },
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'ListBox',
                            Name: 'DropDownListBox',
                            Help: 300105,
                            'FIXME-IDS': 0,
                            ViewPort: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 343,
                              height: 221,
                              alignment: 'TopLeft',
                            },

                            ListBox: {
                              xorigin: 0,
                              yorigin: 0,
                              width: 343,
                              height: 152,
                              drawbox: true,
                              gridstep: 22,
                              edgespacer: 8,
                              linespacer: 1,
                              linesize: 32,
                              columnwidths: [
                                {
                                  width: 64,
                                },
                                {
                                  width: 285,
                                },
                              ],
                            },
                            StateMaterials: {
                              StateTLDisabled: {
                                Material: 'ListBoxTL',
                              },
                              StateTCDisabled: {
                                Material: 'ListBoxTC',
                              },
                              StateTRDisabled: {
                                Material: 'ListBoxTR',
                              },
                              StateCLDisabled: {
                                Material: 'ListBoxCL',
                              },
                              StateCCDisabled: {
                                Material: 'ListBoxCC',
                              },
                              StateCRDisabled: {
                                Material: 'ListBoxCR',
                              },
                              StateBLDisabled: {
                                Material: 'ListBoxBL',
                              },
                              StateBCDisabled: {
                                Material: 'ListBoxBC',
                              },
                              StateBRDisabled: {
                                Material: 'ListBoxBR',
                              },
                              StateTLNormal: {
                                Material: 'ListBoxTL',
                              },
                              StateTCNormal: {
                                Material: 'ListBoxTC',
                              },
                              StateTRNormal: {
                                Material: 'ListBoxTR',
                              },
                              StateCLNormal: {
                                Material: 'ListBoxCL',
                              },
                              StateCCNormal: {
                                Material: 'ListBoxCC',
                              },
                              StateCRNormal: {
                                Material: 'ListBoxCR',
                              },
                              StateBLNormal: {
                                Material: 'ListBoxBL',
                              },
                              StateBCNormal: {
                                Material: 'ListBoxBC',
                              },
                              StateBRNormal: {
                                Material: 'ListBoxBR',
                              },
                              StateTextNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 25,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextSelected: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 25,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 171,
                                    g: 28,
                                    b: 27,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextHilighted: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 25,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                              StateTextPressed: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 25,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 57,
                                    g: 156,
                                    b: 154,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            ChildWidgets: [
                              {
                                Widget: {
                                  Type: 'ScrollBarVertical',
                                  Name: 'ListScrollBar',
                                  ViewPort: {
                                    xorigin: 310,
                                    yorigin: 3,
                                    width: 32,
                                    height: 400,
                                    alignment: 'TopLeft',
                                  },

                                  Bar: {
                                    xorigin: 0,
                                    yorigin: 31,
                                    width: 32,
                                    height: 320,
                                  },
                                  MinButton: {
                                    xorigin: 0,
                                    yorigin: 0,
                                    width: 32,
                                    height: 32,
                                  },
                                  MaxButton: {
                                    xorigin: 0,
                                    yorigin: 350,
                                    width: 32,
                                    height: 32,
                                  },
                                  TabSize: {
                                    width: 32,
                                    height: 32,
                                  },
                                  StateMaterials: {
                                    StateBarBackground: {
                                      Material: 'ScrollBarBackground',
                                    },
                                    StateBarForeground: {
                                      Material: 'ScrollBarBackground',
                                    },

                                    StateMinDisabled: {
                                      Material: 'ScrollBarUpArrowNormal',
                                    },
                                    StateMinNormal: {
                                      Material: 'ScrollBarUpArrowNormal',
                                    },
                                    StateMinHover: {
                                      Material: 'ScrollBarUpArrowHover',
                                    },
                                    StateMinPressed: {
                                      Material: 'ScrollBarUpArrowPressed',
                                    },

                                    StateMaxDisabled: {
                                      Material: 'ScrollBarDownArrowNormal',
                                    },
                                    StateMaxNormal: {
                                      Material: 'ScrollBarDownArrowNormal',
                                    },
                                    StateMaxHover: {
                                      Material: 'ScrollBarDownArrowHover',
                                    },
                                    StateMaxPressed: {
                                      Material: 'ScrollBarDownArrowPressed',
                                    },

                                    StateTabDisabled: {
                                      Material: 'ScrollBarHandleNormal',
                                    },
                                    StateTabNormal: {
                                      Material: 'ScrollBarHandleNormal',
                                    },
                                    StateTabHover: {
                                      Material: 'ScrollBarHandleNormal',
                                    },
                                    StateTabPressed: {
                                      Material: 'ScrollBarHandleNormal',
                                    },
                                  },
                                  ChildWidgets: [],
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CheckBox',
                      Name: 'ViewLock',
                      Help: 'IDS_REPLAY_VIEWLOCK_HELP_TEXT',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 50,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                        FitChildren: true,
                      },

                      StateMaterials: {
                        StateCheckedDisabled: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateChecked: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateCheckedHover: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateCheckedPressed: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateUncheckedDisabled: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUnchecked: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUncheckedHover: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                        StateUncheckedPressed: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                      },
                      Image: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Label',
                            Name: 'Label',
                            ViewPort: {
                              xorigin: 43,
                              yorigin: 0,
                              width: 300,
                              height: 35,
                              alignment: 'TopLeft',
                            },
                            AutoSize: true,
                            StateMaterials: {
                              StateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateDisabled: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 242,
                                    g: 210,
                                    b: 182,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            Text: 'IDS_REPLAY_VIEWLOCK',
                            TextAnchor: 'TopLeft',
                            ChildWidgets: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CheckBox',
                      Name: 'FogOfWar',
                      Help: 'IDS_REPLAY_FOGOFWAR_HELP_TEXT',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 85,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                        FitChildren: true,
                      },

                      StateMaterials: {
                        StateCheckedDisabled: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateChecked: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateCheckedHover: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateCheckedPressed: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateUncheckedDisabled: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUnchecked: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUncheckedHover: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                        StateUncheckedPressed: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                      },
                      Image: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Label',
                            Name: 'Label',
                            ViewPort: {
                              xorigin: 43,
                              yorigin: 0,
                              width: 380,
                              height: 35,
                              alignment: 'TopLeft',
                            },
                            AutoSize: true,
                            StateMaterials: {
                              StateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            Text: 'IDS_REPLAY_FOGOFWAR',
                            TextAnchor: 'TopLeft',
                            ChildWidgets: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CheckBox',
                      Name: 'AllVisible',
                      Help: 300321,
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 120,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                        FitChildren: true,
                      },

                      StateMaterials: {
                        StateCheckedDisabled: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateChecked: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateCheckedHover: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateCheckedPressed: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateUncheckedDisabled: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUnchecked: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUncheckedHover: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                        StateUncheckedPressed: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                      },
                      Image: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Label',
                            Name: 'Label',
                            ViewPort: {
                              xorigin: 43,
                              yorigin: 0,
                              width: 380,
                              height: 35,
                              alignment: 'TopLeft',
                            },
                            AutoSize: true,
                            StateMaterials: {
                              StateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateDisabled: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 242,
                                    g: 210,
                                    b: 182,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            Text: 300320,
                            TextAnchor: 'TopLeft',
                            ChildWidgets: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'CheckBox',
                      Name: 'DemoLoop',
                      Help: 'IDS_REPLAY_DEMOLOOP_HELP_TEXT',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 155,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                        FitChildren: true,
                      },

                      StateMaterials: {
                        StateCheckedDisabled: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateChecked: {
                          Material: 'RecordedGameCheckboxCheckedNormal',
                        },
                        StateCheckedHover: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateCheckedPressed: {
                          Material: 'RecordedGameCheckboxCheckedHover',
                        },
                        StateUncheckedDisabled: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUnchecked: {
                          Material: 'RecordedGameCheckboxUncheckedNormal',
                        },
                        StateUncheckedHover: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                        StateUncheckedPressed: {
                          Material: 'RecordedGameCheckboxUncheckedHover',
                        },
                      },
                      Image: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 35,
                        height: 35,
                        alignment: 'TopLeft',
                      },
                      ChildWidgets: [
                        {
                          Widget: {
                            Type: 'Label',
                            Name: 'Label',
                            ViewPort: {
                              xorigin: 43,
                              yorigin: 0,
                              width: 380,
                              height: 35,
                              alignment: 'TopLeft',
                            },
                            AutoSize: true,
                            StateMaterials: {
                              StateNormal: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 255,
                                    g: 255,
                                    b: 255,
                                    a: 255,
                                  },
                                },
                              },
                              StateDisabled: {
                                Font: {
                                  FontIndex: 0,
                                  PointSize: 35,
                                  Style: 'Normal',
                                  TextColor: {
                                    r: 242,
                                    g: 210,
                                    b: 182,
                                    a: 255,
                                  },
                                },
                              },
                            },
                            Text: 'IDS_REPLAY_DEMOLOOP',
                            TextAnchor: 'TopLeft',
                            ChildWidgets: [],
                          },
                        },
                      ],
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'PreviousChapter',
                      ClickSound: '?button_ui',
                      Help: 300106,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 304,
                        yorigin: 124,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },
                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGamePreviousChapterDisabled',
                        },
                        StateNormal: {
                          Material: 'RecordedGamePreviousChapterNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGamePreviousChapterHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGamePreviousChapterActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'NextChapter',
                      ClickSound: '?button_ui',
                      Help: 300107,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 380,
                        yorigin: 124,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGameNextChapterDisabled',
                        },
                        StateNormal: {
                          Material: 'RecordedGameNextChapterNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGameNextChapterHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGameNextChapterActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Restart',
                      ClickSound: '?button_ui',
                      Help: 300108,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGamePreviousChapterDisabled',
                        },
                        StateNormal: {
                          Material: 'RecordedGamePreviousChapterNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGamePreviousChapterHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGamePreviousChapterActive',
                        },
                        StateGroupActive: {
                          Material: 'RecordedGamePreviousChapterActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Pause',
                      ClickSound: '?button_ui',
                      Help: 300109,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 76,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGamePauseNormal',
                        },
                        StateNormal: {
                          Material: 'RecordedGamePauseNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGamePauseHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGamePauseActive',
                        },
                        StateGroupActive: {
                          Material: 'RecordedGamePauseActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Slow',
                      ClickSound: '?button_ui',
                      Help: 300110,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 152,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },
                      HotKey: {
                        Group: 'SPECTATOR_HOTKEYS',
                        Key: 'REPLAY_SPEED_SLOW',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGamePlayChapterDisabled',
                        },
                        StateNormal: {
                          Material: 'RecordedGamePlayChapterNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGamePlayChapterHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGamePlayChapterActive',
                        },
                        StateGroupActive: {
                          Material: 'RecordedGamePlayChapterActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Normal',
                      ClickSound: '?button_ui',
                      Help: 300111,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 228,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },
                      HotKey: {
                        Group: 'SPECTATOR_HOTKEYS',
                        Key: 'REPLAY_SPEED_DEFAULT',
                      },

                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGameDefaultSpeedNormal',
                        },
                        StateNormal: {
                          Material: 'RecordedGameDefaultSpeedNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGameDefaultSpeedHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGameDefaultSpeedActive',
                        },
                        StateGroupActive: {
                          Material: 'RecordedGameDefaultSpeedActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Fast',
                      ClickSound: '?button_ui',
                      Help: 300112,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 304,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },

                      HotKey: {
                        Group: 'SPECTATOR_HOTKEYS',
                        Key: 'REPLAY_SPEED_FAST',
                      },
                      StateMaterials: {
                        StateDisabled: {
                          Material: 'RecordedGameSpeedupForwardDisabled',
                        },
                        StateNormal: {
                          Material: 'RecordedGameSpeedupForwardNormal',
                        },
                        StateHover: {
                          Material: 'RecordedGameSpeedupForwardHover',
                        },
                        StatePressed: {
                          Material: 'RecordedGameSpeedupForwardActive',
                        },
                        StateGroupActive: {
                          Material: 'RecordedGameSpeedupForwardActive',
                        },
                      },
                    },
                  },
                  {
                    Widget: {
                      Type: 'Button',
                      Name: 'Faster',
                      ClickSound: '?button_ui',
                      Help: 300113,
                      'FIXME-IDS': 0,
                      ViewPort: {
                        xorigin: 380,
                        yorigin: 200,
                        width: 70,
                        height: 70,
                        alignment: 'TopLeft',
                      },

                      HotKey: {
                        Group: 'SPECTATOR_HOTKEYS',
                        Key: 'REPLAY_SPEED_FASTER',
                      },
                      StateMaterials: {
                        StateDisabled: {
                          Material:
                            'RecordedGameSpeedupExtraspeedupForwardDisabled',
                        },
                        StateNormal: {
                          Material:
                            'RecordedGameSpeedupExtraspeedupForwardNormal',
                        },
                        StateHover: {
                          Material:
                            'RecordedGameSpeedupExtraspeedupForwardHover',
                        },
                        StatePressed: {
                          Material:
                            'RecordedGameSpeedupExtraspeedupForwardActive',
                        },
                        StateGroupActive: {
                          Material:
                            'RecordedGameSpeedupExtraspeedupForwardActive',
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'FlightNameLabel',
                ViewPort: {
                  xorigin: 50,
                  yorigin: 10,
                  width: 450,
                  height: 450,
                  alignment: 'TopLeft',
                },

                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 255,
                        g: 255,
                        b: 255,
                        a: 255,
                      },
                    },
                  },
                },
                Text: 'TEST',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
          ],
        },
      },
    ],
  },
}

export const blankBottomPanel: Panel = {
  Collection: {
    Name: 'BlankBottomPanel',
    ViewPort: {
      xorigin: 1920,
      yorigin: 2160,
      width: 3840,
      height: 73,
      alignment: 'BottomCentre',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'BlankBottom',
          ViewPort: {
            xorigin: 0,
            yorigin: 73,
            width: 3840,
            height: 73,
            alignment: 'BottomLeft',
          },
          ZPlane: 0,
          Image: {
            xorigin: 1920,
            yorigin: 0,
            width: 3840,
            height: 73,
            noclip: true,
            alignment: 'TopCentre',
          },
          Wrap: {
            width: 360,
            height: 0,
          },
          StateMaterials: {
            UserStates: 1,
            UserState0: {
              Material: 'CivAsiaBottombar',
            },
          },
          ChildWidgets: [],
        },
      },
    ],
  },
}

export const mapPanel: Panel = {
  Collection: {
    Name: 'MapPanel',
    ViewPort: {
      xorigin: 3839,
      yorigin: 2159,
      width: 1940,
      height: 413,
      alignment: 'BottomRight',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 1080,
            yorigin: 0,
            width: 860,
            height: 413,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          StateMaterials: {
            UserStates: 1,
            UserState0: {
              Material: 'CivAsiaMapPanel',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonFlare',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 185,
                  yorigin: 129,
                  width: 69,
                  height: 69,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 4140,
                Radius: 30,
                StateMaterials: {
                  StateDisabled: {
                    Material: 'MinimapFlareDisabled',
                  },
                  StateNormal: {
                    Material: 'MinimapFlareNormal',
                  },
                  StateHover: {
                    Material: 'MinimapFlareHover',
                  },
                  StatePressed: {
                    Material: 'MinimapFlareActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonPlayer',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 776,
                  yorigin: 129,
                  width: 69,
                  height: 69,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 9271,
                Radius: 30,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MinimapPlayerStatsNormal',
                  },
                  StateHover: {
                    Material: 'MinimapPlayerStatsHover',
                  },
                  StatePressed: {
                    Material: 'MinimapPlayerStatsActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonFilter',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 776,
                  yorigin: 318,
                  width: 69,
                  height: 69,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 40049,
                Radius: 30,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MinimapFilterEconomyNormal',
                  },
                  StateHover: {
                    Material: 'MinimapFilterEconomyHover',
                  },
                  StatePressed: {
                    Material: 'MinimapFilterEconomyActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'ButtonColor',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 185,
                  yorigin: 318,
                  width: 69,
                  height: 69,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 40048,
                Radius: 30,
                StateMaterials: {
                  StateNormal: {
                    Material: 'MinimapFilterEconomyNormal',
                  },
                  StateHover: {
                    Material: 'MinimapFilterEconomyHover',
                  },
                  StatePressed: {
                    Material: 'MinimapFilterEconomyActive',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'MapView',
                Name: 'MapView',
                show: true,
                ViewPort: {
                  xorigin: 472,
                  yorigin: 216,
                  width: 720,
                  height: 400,
                  alignment: 'CentreCentre',
                },
                Help: 300184,
                Image: {
                  xorigin: 20,
                  yorigin: 20,
                  width: 696,
                  height: 375,
                  alignment: 'TopLeft',
                },

                ChildWidgets: [],
              },
            },
          ],
        },
      },
    ],
  },
}

export const blankTopPanel: Panel = {
  Collection: {
    Name: 'BlankTopPanel',
    ViewPort: {
      xorigin: 1920,
      yorigin: 0,
      width: 3840,
      height: 52,
      alignment: 'TopCentre',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'BlankTop',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 3840,
            height: 52,
            alignment: 'TopLeft',
          },
          ZPlane: 0,
          Image: {
            xorigin: 1920,
            yorigin: 0,
            width: 3840,
            height: 52,
            noclip: true,
            alignment: 'TopCentre',
          },
          Wrap: {
            width: 1920,
            height: 0,
          },
          StateMaterials: {
            UserStates: 1,
            UserState0: {
              Material: 'CivAsiaTopbar',
            },
          },
          ChildWidgets: [],
        },
      },
    ],
  },
}

export const resourcePanel: Panel = {
  Collection: {
    Name: 'ResourcePanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 1935,
      height: 228,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Base',
          Name: 'Background',
          ViewPort: {
            xorigin: 0,
            yorigin: 0,
            width: 1750,
            height: 276,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          StateMaterials: {
            UserStates: 1,
            UserState0: {
              Material: 'CivAsiaResourcePanel',
            },
          },
          ChildWidgets: [
            {
              Widget: {
                Type: 'Base',
                Name: 'Wood',
                ViewPort: {
                  xorigin: 57,
                  yorigin: 57,
                  width: 84,
                  height: 84,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 42011,
                StateMaterials: {
                  StateNormal: {
                    Material: 'ResourceWood',
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'Workers',
                      ViewPort: {
                        xorigin: 16,
                        yorigin: 55,
                        width: 60,
                        height: 32,
                        alignment: 'TopLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Help: 13362,
                      Text: '30',
                      TextAnchor: 'TopRight',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'WoodStorage',
                ViewPort: {
                  xorigin: 108,
                  yorigin: 60,
                  width: 100,
                  height: 34,
                  alignment: 'CentreLeft',
                },
                Help: 42202,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                    },
                  },
                },
                Text: '10000',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'Food',
                ViewPort: {
                  xorigin: 257,
                  yorigin: 57,
                  width: 84,
                  height: 84,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 42010,
                StateMaterials: {
                  StateNormal: {
                    Material: 'ResourceFood',
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'Workers',
                      ViewPort: {
                        xorigin: 16,
                        yorigin: 55,
                        width: 60,
                        height: 32,
                        alignment: 'TopLeft',
                      },
                      Help: 13363,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '30',
                      TextAnchor: 'TopRight',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'FoodStorage',
                ViewPort: {
                  xorigin: 308,
                  yorigin: 60,
                  width: 100,
                  height: 34,
                  alignment: 'CentreLeft',
                },
                Help: 42201,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                    },
                  },
                },
                Text: '10000',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'Gold',
                ViewPort: {
                  xorigin: 457,
                  yorigin: 57,
                  width: 84,
                  height: 84,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 42012,
                StateMaterials: {
                  StateNormal: {
                    Material: 'ResourceGold',
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'Workers',
                      ViewPort: {
                        xorigin: 16,
                        yorigin: 55,
                        width: 60,
                        height: 32,
                        alignment: 'TopLeft',
                      },
                      Help: 13364,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '30',
                      TextAnchor: 'TopRight',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'GoldStorage',
                ViewPort: {
                  xorigin: 508,
                  yorigin: 60,
                  width: 100,
                  height: 34,
                  alignment: 'CentreLeft',
                },
                Help: 42203,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                    },
                  },
                },
                Text: '10000',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'Stone',
                ViewPort: {
                  xorigin: 657,
                  yorigin: 57,
                  width: 84,
                  height: 84,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 42013,
                StateMaterials: {
                  StateNormal: {
                    Material: 'ResourceStone',
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'Workers',
                      ViewPort: {
                        xorigin: 16,
                        yorigin: 55,
                        width: 60,
                        height: 32,
                        alignment: 'TopLeft',
                      },
                      Help: 13365,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '30',
                      TextAnchor: 'TopRight',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'StoneStorage',
                ViewPort: {
                  xorigin: 710,
                  yorigin: 60,
                  width: 100,
                  height: 34,
                  alignment: 'CentreLeft',
                },
                Help: 42204,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                    },
                  },
                },
                Text: '10000',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'Population',
                ViewPort: {
                  xorigin: 856,
                  yorigin: 57,
                  width: 86,
                  height: 84,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Help: 4313,
                StateMaterials: {
                  UserStates: 2,
                  UserState0: {
                    Material: 'Population',
                  },
                  UserState1: {
                    Material: 'None',
                    TextColor: {
                      r: 1,
                      g: 1,
                      b: 1,
                      a: 1,
                    },
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'Workers',
                      ViewPort: {
                        xorigin: 16,
                        yorigin: 55,
                        width: 60,
                        height: 32,
                        alignment: 'TopLeft',
                      },
                      Help: 300322,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 0,
                            PointSize: 32,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      Text: '30',
                      TextAnchor: 'TopRight',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'PopulationCount',
                ViewPort: {
                  xorigin: 910,
                  yorigin: 60,
                  width: 130,
                  height: 34,
                  alignment: 'CentreLeft',
                },
                Help: 4313,
                StateMaterials: {
                  UserStates: 2,
                  UserState0: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                    },
                  },
                  UserState1: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 34,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 0,
                        b: 0,
                        a: 1,
                      },
                    },
                  },
                },
                Text: '300/300',
                TextAnchor: 'TopLeft',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'PopulationFlash',
                ViewPort: {
                  xorigin: 900,
                  yorigin: 60,
                  width: 140,
                  height: 72,
                  alignment: 'CentreLeft',
                },
                ZPlaneLocalOffset: 1,
                StateMaterials: {
                  StateNormal: {
                    Material: 'FlatColorWithAlpha',
                    Color: {
                      r: 1,
                      g: 1,
                      b: 0,
                      a: 0.7,
                    },
                  },
                },
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'Idle',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 1080,
                  yorigin: 57,
                  width: 70,
                  height: 70,
                  alignment: 'CentreCentre',
                },
                ZPlaneLocalOffset: 1,
                Radius: 25,
                StateMaterials: {
                  StateNormal: {
                    Material: 'IdleVillagerNormal',
                  },
                  StateHover: {
                    Material: 'IdleVillagerHover',
                  },
                  StatePressed: {
                    Material: 'IdleVillagerActive',
                  },
                  StateDisabled: {
                    Material: 'IdleVillagerDisabled',
                  },
                },
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'IdleWorkers',
                ViewPort: {
                  xorigin: 1044,
                  yorigin: 56,
                  width: 60,
                  height: 32,
                  alignment: 'TopLeft',
                },
                ZPlane: 10,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 0,
                      PointSize: 32,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                      TextOutlineWidth: 0.01,
                      TextOutlineColor: {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1,
                      },
                    },
                  },
                },
                TextAnchor: 'TopRight',
                ChildWidgets: [],
              },
            },
            {
              Widget: {
                Type: 'Button',
                Name: 'AgeUp',
                ClickSound: '?button_ui',
                ViewPort: {
                  xorigin: 1200,
                  yorigin: 62,
                  width: 141,
                  height: 122,
                  alignment: 'CentreCentre',
                },
                StateMaterials: {
                  StateDisabled: {
                    Material: 'AgeupCastleAge',
                  },
                  StateNormal: {
                    Material: 'AgeupCastleAge',
                  },
                  StateHover: {
                    Material: 'AgeupCastleAge',
                  },
                },
              },
            },
            {
              Widget: {
                Type: 'ProgressBar',
                Name: 'AgeBar',
                ViewPort: {
                  xorigin: 1250,
                  yorigin: 57,
                  width: 378,
                  height: 52,
                  alignment: 'CentreLeft',
                },
                StateMaterials: {
                  StateNormal: {
                    Material: 'AgeBar',
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'AgeTextLabel',
                      ViewPort: {
                        xorigin: 0,
                        yorigin: 0,
                        width: 380,
                        height: 50,
                        alignment: 'TopLeft',
                      },
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 2,
                            PointSize: 44,
                            Style: 'Normal',
                            TextColor: {
                              r: 255,
                              g: 255,
                              b: 255,
                              a: 255,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 0,
                              g: 0,
                              b: 0,
                              a: 1,
                            },
                          },
                        },
                      },
                      TextAnchor: 'BottomCentre',
                      ChildWidgets: [],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
}

export const worldTimerPanel: Panel = {
  Collection: {
    Name: 'WorldTimerPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 3840,
      height: 2160,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Anchor',
          Name: 'WorldTimer',
          Anchor: {
            xorigin: 1700,
            yorigin: 0,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          ChildWidgets: [
            {
              Widget: {
                Type: 'Label',
                Name: 'WorldTimerLabel',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 12,
                  width: 1000,
                  height: 40,
                  alignment: 'TopLeft',
                },

                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                    },
                  },
                },
                TextAnchor: 'TopLeft',
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'SpectatorsIcon',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 64,
                  width: 500,
                  height: 49,
                  alignment: 'TopLeft',
                },
                Image: {
                  xorigin: 0,
                  yorigin: 2,
                  width: 48,
                  height: 32,
                  alignment: 'TopLeft',
                },
                ZPlane: 1,
                StateMaterials: {
                  StateNormal: {
                    Material: 'SpectatorsIcon',
                    Color: {
                      r: 1,
                      g: 1,
                      b: 1,
                      a: 1,
                    },
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'SpectatorsLabel',
                      ViewPort: {
                        xorigin: 55,
                        yorigin: 0,
                        width: 512,
                        height: 49,
                        alignment: 'TopLeft',
                      },
                      ZPlane: 1,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 3,
                            PointSize: 40,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'TopLeft',
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'GameIDLabel',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 64,
                  width: 512,
                  height: 49,
                  alignment: 'TopLeft',
                },
                ZPlane: 1,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                    },
                  },
                },
                TextAnchor: 'TopLeft',
              },
            },
          ],
        },
      },
    ],
  },
}

export const wonderTimerPanel: Panel = {
  Collection: {
    Name: 'WorldTimerPanel',
    ViewPort: {
      xorigin: 0,
      yorigin: 0,
      width: 3840,
      height: 2160,
      alignment: 'TopLeft',
    },
    Widgets: [
      {
        Widget: {
          Type: 'Anchor',
          Name: 'WorldTimer',
          Anchor: {
            xorigin: 1700,
            yorigin: 0,
            alignment: 'TopLeft',
          },
          ZPlane: 1,
          ChildWidgets: [
            {
              Widget: {
                Type: 'Label',
                Name: 'WorldTimerLabel',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 12,
                  width: 1000,
                  height: 40,
                  alignment: 'TopLeft',
                },

                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                    },
                  },
                },
                TextAnchor: 'TopLeft',
              },
            },
            {
              Widget: {
                Type: 'Base',
                Name: 'SpectatorsIcon',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 64,
                  width: 500,
                  height: 49,
                  alignment: 'TopLeft',
                },
                Image: {
                  xorigin: 0,
                  yorigin: 2,
                  width: 48,
                  height: 32,
                  alignment: 'TopLeft',
                },
                ZPlane: 1,
                StateMaterials: {
                  StateNormal: {
                    Material: 'SpectatorsIcon',
                    Color: {
                      r: 1,
                      g: 1,
                      b: 1,
                      a: 1,
                    },
                  },
                },
                ChildWidgets: [
                  {
                    Widget: {
                      Type: 'Label',
                      Name: 'SpectatorsLabel',
                      ViewPort: {
                        xorigin: 55,
                        yorigin: 0,
                        width: 512,
                        height: 49,
                        alignment: 'TopLeft',
                      },
                      ZPlane: 1,
                      StateMaterials: {
                        StateNormal: {
                          Font: {
                            FontIndex: 3,
                            PointSize: 40,
                            Style: 'Normal',
                            TextColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 1,
                            },
                            TextOutlineWidth: 0.05,
                            TextOutlineColor: {
                              r: 1,
                              g: 1,
                              b: 1,
                              a: 255,
                            },
                          },
                        },
                      },
                      TextAnchor: 'TopLeft',
                    },
                  },
                ],
              },
            },
            {
              Widget: {
                Type: 'Label',
                Name: 'GameIDLabel',
                ViewPort: {
                  xorigin: 0,
                  yorigin: 64,
                  width: 512,
                  height: 49,
                  alignment: 'TopLeft',
                },
                ZPlane: 1,
                StateMaterials: {
                  StateNormal: {
                    Font: {
                      FontIndex: 3,
                      PointSize: 40,
                      Style: 'Normal',
                      TextColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 1,
                      },
                      TextOutlineWidth: 0.05,
                      TextOutlineColor: {
                        r: 1,
                        g: 1,
                        b: 1,
                        a: 255,
                      },
                    },
                  },
                },
                TextAnchor: 'TopLeft',
              },
            },
          ],
        },
      },
    ],
  },
}
