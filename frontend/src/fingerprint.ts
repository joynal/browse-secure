import {hashComponents, load, sources} from '@fingerprintjs/fingerprintjs';

type WithoutDuration<T> = {
    [P in keyof T]: Omit<T[P], 'duration'>;
};

type CustomBuiltinComponents = Pick<typeof sources,
    'fonts' |
    'canvas' |
    'screenResolution' |
    'languages' |
    'audio' |
    'timezone' |
    'sessionStorage' |
    'localStorage' |
    'cookiesEnabled' |
    'colorDepth' |
    'platform' |
    'vendor' |
    'vendorFlavors' |
    'pdfViewerEnabled'
>;

type Fingerprint = WithoutDuration<CustomBuiltinComponents>;

export type BrowserFingerprint = {
    visitorHash: string;
    fingerprint: Fingerprint;
};

export const getBrowserFingerprint = async (): Promise<BrowserFingerprint> => {
    const fpInstance = await load();
    const visitorIdentifier = await fpInstance.get();

    const {
        fonts,
        plugins,
        canvas,
        screenResolution,
        languages,
        audio,
        timezone,
        sessionStorage,
        localStorage,
        cookiesEnabled,
        colorDepth,
        platform,
        vendor,
        vendorFlavors,
        pdfViewerEnabled,
    } = visitorIdentifier.components;

    const fingerprint = {
        fonts,
        plugins,
        canvas,
        screenResolution,
        languages,
        audio,
        timezone,
        sessionStorage,
        localStorage,
        cookiesEnabled,
        colorDepth,
        platform,
        vendor,
        vendorFlavors,
        pdfViewerEnabled,
    };



    const visitorHash = hashComponents(fingerprint);

    return {
        visitorHash,
        fingerprint: fingerprint,
    };
};
