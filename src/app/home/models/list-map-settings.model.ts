export interface LisMapModel {
    listVisible: boolean;
    mapVisible: boolean;
    curretnPositionVisible: boolean;
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
                curretnPositionVisible: false,
                filterVisible: false,
                searchBarVisible: true
            }
        ],
        [
            ListMapTypes.mapVisualization, {
                listVisible: false,
                mapVisible: true,
                curretnPositionVisible: true,
                filterVisible: false,
                searchBarVisible: false
            }
        ]
    ]
);