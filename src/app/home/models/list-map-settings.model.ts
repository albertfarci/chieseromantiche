export interface LisMapModel {
    listVisible: boolean;
    mapVisible: boolean;
    filterVisible: boolean;
    searchBarVisible: boolean;
}

export enum ListMapTypes {
    "mapVisualization" = "mapVisualization",
    "listVisualization" = "listVisualization"
}

export const LIST_MAP_CONFIGURATION = new Map<ListMapTypes, LisMapModel>(
    [
        [
            ListMapTypes.listVisualization, {
                listVisible: true,
                mapVisible: false,
                filterVisible: true,
                searchBarVisible: true
            }
        ],
        [
            ListMapTypes.mapVisualization, {
                listVisible: false,
                mapVisible: true,
                filterVisible: false,
                searchBarVisible: false
            }
        ]
    ]
);