import '@servicenow/sdk/global'
import {
    Table,
    StringColumn,
    DateColumn,
    IntegerColumn,
} from '@servicenow/sdk/core'

export const x_ride_share_car = Table({
    name: 'x_ride_share_car',          // must be scoped, lowercase
    label: 'Car',                      // table label
    schema: {
        title: StringColumn({
            label: 'Destination',
            maxLength: 128,
            required: true,
        }),
        name: StringColumn({
            label: 'Name',
            maxLength: 128,
        }),
        evening_time: DateColumn({
            label: 'Evening Time',
        }),
        morning_time: DateColumn({
            label: 'Morning Time',
        }),
        max_passengers: IntegerColumn({
            label: 'Max Passengers',
            minValue: 1,
        }),
        passengers: IntegerColumn({
            label: 'Passengers',
            minValue: 1,
        }),
    },
})