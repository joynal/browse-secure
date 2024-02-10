import React, {useEffect, useState} from "react";
import JsonView from '@uiw/react-json-view';

import {getBrowserFingerprint, BrowserFingerprint} from "./fingerprint";

const App = () => {
    const [fingerprint, setFingerprint] = useState<null | BrowserFingerprint>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fingerprintData = await getBrowserFingerprint();
                setFingerprint(fingerprintData);
            } catch (error) {
                console.error('Error fetching fingerprint:', error);
            }
        };

        fetchData();
    }, []);


    return (
        <div style={{width: '40%', margin: 'auto'}}>
            <h1>You have been pwned! <span role="img" aria-label="Funny face">😅</span></h1>
            <h4><b style={{color: '#cb4b16'}}>35078</b> people clicked this link</h4>
            <p>ফোনে যেকোন অ্যাপ ইন্সটল করার সময় যা পারমিশন চায় দিয়ে দেন, এইবার সেই অ্যাপ সুন্দর করে আপনার যত ডাটা আছে সব
                তাদের সার্ভারে পাঠিয়ে দিবে। কেমনে, কোন সময় দিবে সেটা আপনি টেরও পাবেন না। আমাদের দেশের জনপ্রিয় রাইড
                শেয়ারিং অ্যাপ এই একই কাজটা করছে, ব্যাবহারকারির ব্যাক্তিগত মেসেজ, কলহিস্ট্রি, কন্টাক্ট নাম্বার সব নিয়ে
                নিসে। এখন এই ডাটা যারা অ্যাক্সেস করতে পারত তারা এইসব জিনিস পড়ত, ধরেন তাদের কলিগ কতটাকা স্যালারি পায় এইটা
                ব্যাংকের পাঠানো মেসেজ দেখেই বুঝা ফেলা যায়। ফ্রিতে মুভি দেখার জন্য অ্যাপ ইন্সটল করছেন, সেই অ্যাপ কারা
                বানাইসে তাদের পলিসি কি কিছুই জানেননা আপনার ব্যাক্টিগত সবকিছু কম্প্রমাইজ হয়ে যেতে পারে। আপনার ব্যাক্তিগত
                ডাটা কালেক্ট করে বিভিন্ন কোম্পনির কাছে সেল করবে, ওইসব কোম্পানি আপনার কাছে বিভিন্ন কিছু বিক্রির জন্য
                এলাকা ভিত্তিক মার্কেটিং করবে। এখন আপনি বলতে পারেন আমি যদু-মদু আমার জিনিস পত্র গেলেই কি আর না গেলেই কি,
                আমার কি দুই পয়সা লস হইতাছে? লাভ-লস জানিনা কিন্তু মজাটা ঠিকই টের পাবেন যখন দেখবেন আপনার বফ/গফ কে পাঠানোর
                জন্য আপনার নুড পুরা ইন্টারনেট জুড়ে ভাইরাল হয়ে গেছে। এখন এই নুড আপনি আগে তুলে রাখতে পারেন অথবা এইসব অ্যাপ
                আপনার অজান্তেই আপনার ছবি তুলে ফেলতে পারে। আপনার ব্যাক্তিগত ডাটা শতভাবে ছুরি হতে পারে এবং এইগুলা থেকে
                নিজেকে নিরাপদ রাখার একমাত্র উপায় হচ্ছে এইসব নিয়ে জানা এবং সচেতনতা বাড়ানো।

                সাইবার নিরাপত্তা সচেতনতা নিয়ে আমি কিছু লিখা পাবলিশ করব, এইসব বিষয় নিয়ে শিখতে বা জানতে চাইলে আমাকে ফলো
                দিয়ে রাখতে পারেন।
            </p>
            {fingerprint && <JsonView value={fingerprint} displayDataTypes={false} displayObjectSize={false}
                                      enableClipboard={false} highlightUpdates={false}/>}
        </div>
    );
}

export default App;
