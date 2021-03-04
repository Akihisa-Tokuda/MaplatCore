import Weiwudi from "weiwudi";
import { MaplatMap } from "../map_ex";
import { Coordinate } from "ol/coordinate";
import { Feature, Polygon } from "@turf/turf";
import { Size } from "ol/size";
declare type Constructor<T = {}> = new (...args: any[]) => T;
declare type Condition = {
    x?: number;
    y?: number;
    latitude?: number;
    longitude?: number;
    mercZoom?: number;
    zoom?: number;
    direction?: number;
    rotation?: number;
};
export declare function setCustomFunction<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        weiwudi?: Weiwudi | undefined;
        _map?: MaplatMap | undefined;
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
        envelope?: Feature<Polygon, import("@turf/helpers").Properties> | undefined;
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
        fetchAllTileCacheAsync(callback: any): Promise<void>;
        cancelTileCacheAsync(): Promise<void>;
        clearTileCacheAsync(): Promise<void>;
        getMap(): MaplatMap | undefined;
        setViewpointRadian(cond: Condition): void;
        setViewpoint(cond: Condition): void;
        goHome(): void;
        setGPSMarkerAsync(position: any, ignoreMove?: boolean): Promise<unknown>;
        setGPSMarker(position: any, ignoreMove?: boolean): void;
        getRadius(size: Size, zoom?: number | undefined): number;
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
} & TBase;
export declare const META_KEYS: string[];
export declare function setCustomInitialize(self: any, options: any): void;
export declare function setupTileLoadFunction(target: any): void;
export {};
