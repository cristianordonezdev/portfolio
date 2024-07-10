export interface INavigation {
    title: string,
    route_name?: string,
    is_disabled?: boolean
    icon?: string,
    params?: IParams
}
interface IParams {
    type: string
}