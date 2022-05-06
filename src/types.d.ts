export type Wheather = 'sunny' | 'rainy' | 'cloudy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
    id: number,
    date: string,
    weather: Wheater,
    visibility: Visibility,
    commet: string
}
 
