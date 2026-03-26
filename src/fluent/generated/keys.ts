import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '871a553d82394917a3205dc5a13a8874'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '32f8e54c237541159265489270c9ac2c'
                    }
                }
                composite: [
                    {
                        table: 'sys_documentation'
                        id: '01d818399f333210cf983781990a1cad'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '021e46b3666d49b2a61e0175ab591710'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'evening_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '0dd818399f333210cf983781990a1c97'
                        key: {
                            sys_security_acl: '0dd818399f333210cf983781990a1c91'
                            sys_user_role: {
                                id: 'f0d854399f333210cf983781990a1c88'
                                key: {
                                    name: 'x_ride_share.car_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '0fb2e78f09de4811952a11e9fb88c55f'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '11d818399f333210cf983781990a1ce5'
                        key: {
                            name: 'x_ride_share_car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '163a6f11008b47398ac824d11dbbd608'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'destination'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '2c9fa1a6c26047da8678e54038bd86ad'
                        key: {
                            name: 'sn_sub_man_st_account_level_entitlement'
                            element: 'x_ride_share_authorizer'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '4dd818399f333210cf983781990a1c87'
                        key: {
                            sys_security_acl: '4dd818399f333210cf983781990a1c81'
                            sys_user_role: {
                                id: 'f0d854399f333210cf983781990a1c88'
                                key: {
                                    name: 'x_ride_share.car_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '6329459195df4cedb0808a75ec738271'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'name'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '755858f59f333210cf983781990a1c97'
                        key: {
                            name: 'x_ride_share.passenger'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '81d818399f333210cf983781990a1c64'
                        key: {
                            sys_security_acl: 'c9d818399f333210cf983781990a1c59'
                            sys_user_role: {
                                id: 'f0d854399f333210cf983781990a1c88'
                                key: {
                                    name: 'x_ride_share.car_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '8dd818399f333210cf983781990a1c77'
                        key: {
                            sys_security_acl: '8dd818399f333210cf983781990a1c71'
                            sys_user_role: {
                                id: 'f0d854399f333210cf983781990a1c88'
                                key: {
                                    name: 'x_ride_share.car_user'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '983f5bd4297b49159d3abba94e4df14c'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'passengers'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'a03b185cc87d4c33b00d31f0047656ea'
                        key: {
                            name: 'sn_sub_man_st_account_level_entitlement'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a9e6e463fe73484daf544d17a6fa463a'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'evening_time'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'b0f377f6891d428888ea57cafa07b064'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'morning_time'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'b1b746ffabb740769d75059ce8f3330e'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'morning_time'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'cc46f06cc5924edc896de59bc27a1111'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'passengers'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'dedd61683e8c44ca9df0a1c5d3f6de8e'
                        key: {
                            name: 'sn_sub_man_st_account_level_entitlement'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e2db355e55724168a8adcc9d170b547a'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'destination'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: 'e5c4c4eafe4949418317f9578a866080'
                        key: {
                            name: 'x_ride_share_car'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee4a9c297a084634846af7c2296e716a'
                        key: {
                            name: 'x_ride_share_car'
                            element: 'name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f0d854399f333210cf983781990a1c88'
                        key: {
                            name: 'x_ride_share.car_user'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'f95858f59f333210cf983781990a1ca3'
                        key: {
                            name: 'x_ride_share.admin'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'fd5858f59f333210cf983781990a1cab'
                        key: {
                            name: 'x_ride_share.driver'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'fdc238f50a334505ac2bbbebc144efa6'
                        key: {
                            name: 'sn_sub_man_st_account_level_entitlement'
                            element: 'x_ride_share_authorizer'
                        }
                    },
                ]
            }
        }
    }
}
