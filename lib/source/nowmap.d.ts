/// <reference path="../../src/types/weiwudi.d.ts" />
import { OSM } from "ol/source";
import { Coordinate } from "ol/coordinate";
declare const NowMap_base: {
    new (...args: any[]): {
        weiwudi?: import("weiwudi").default | undefined;
        _map?: import("../map_ex").MaplatMap | undefined;
        homePosition?: Coordinate | undefined;
        mercZoom?: number | undefined;
        pois: any;
        officialTitle: string;
        title: string;
        mapID: string;
        label: string;
        initialWait?: Promise<any> | undefined;
        maxZoom?: number | undefined;
        minZoom?: number | undefined;
        envelope?: import("@turf/helpers").Feature<import("@turf/helpers").Polygon, import("@turf/helpers").Properties> | undefined;
        centroid?: number[] | undefined;
        xy2MercAsync(val: Coordinate): Promise<Coordinate>;
        merc2XyAsync(merc: Coordinate, ignoreBackside?: boolean | undefined): Promise<Coordinate | undefined>;
        insideCheckHistMapCoords(coord: Coordinate): boolean;
        getCacheEnable(): boolean;
        getTileCacheStatsAsync(): Promise<{
            size?: number | undefined;
            count?: number | undefined;
            total?: number | undefined;
            percent?: number | undefined;
        }>;
        getTileCacheSizeAsync(): Promise<number>;
        clearTileCacheAsync(): Promise<void>;
        getMap(): import("../map_ex").MaplatMap | undefined;
        setViewpointRadian(cond: {
            x?: number | undefined;
            y?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            mercZoom?: number | undefined;
            zoom?: number | undefined;
            direction?: number | undefined;
            rotation?: number | undefined;
        }): void;
        setViewpoint(cond: {
            x?: number | undefined;
            y?: number | undefined;
            latitude?: number | undefined;
            longitude?: number | undefined;
            mercZoom?: number | undefined;
            zoom?: number | undefined;
            direction?: number | undefined;
            rotation?: number | undefined;
        }): void;
        goHome(): void;
        setGPSMarkerAsync(position: any, ignoreMove?: boolean): Promise<unknown>;
        setGPSMarker(position: any, ignoreMove?: boolean): void;
        getRadius(size: import("ol/size").Size, zoom?: number | undefined): number;
        mercsFromGivenMercZoom(center: Coordinate, mercZoom?: number | undefined, direction?: number | undefined): Coordinate[];
        mercsFromGPSValue(lnglat: Coordinate, acc: number): number[][];
        rotateMatrix(xys: number[][], theta?: number | undefined): Coordinate[];
        size2Xys(center?: Coordinate | undefined, zoom?: number | undefined, rotate?: number | undefined): number[][];
        size2MercsAsync(center?: Coordinate | undefined, zoom?: number | undefined, rotate?: number | undefined): Promise<Coordinate[]>;
        mercs2SizeAsync(mercs: Coordinate[], asMerc?: boolean): Promise<[Coordinate, number, number]>;
        mercs2MercSizeAsync(mercs: Coordinate[]): Promise<[Coordinate, number, number]>;
        xys2Size(xys: Coordinate[]): [Coordinate, number, number];
        mercs2MercRotation(xys: Coordinate[]): number;
        mercs2XysAsync(mercs: Coordinate[]): Promise<(Coordinate | undefined)[][]>;
        resolvePois(pois?: any): Promise<void>;
        getPoi(id: string): undefined;
        addPoi(data: any, clusterId?: string | undefined): any;
        removePoi(id: string): void;
        clearPoi(clusterId?: string | undefined): void;
        listPoiLayers(hideOnly?: boolean, nonzero?: boolean): any[];
        getPoiLayer(id: string): any;
        addPoiLayer(id: string, data: any): void;
        removePoiLayer(id: string): void;
    };
} & typeof OSM;
export declare class NowMap extends NowMap_base {
    constructor(options?: any);
    static createAsync(options: any): Promise<NowMap>;
    xy2MercAsync(xy: Coordinate): Promise<Coordinate>;
    merc2XyAsync(merc: Coordinate): Promise<Coordinate | undefined>;
    insideCheckXy(xy: Coordinate): boolean;
    insideCheckHistMapCoords(histCoords: Coordinate): boolean;
    modulateXyInside(xy: any): any;
    modulateHistMapCoordsInside(histCoords: any): any;
}
export {};
