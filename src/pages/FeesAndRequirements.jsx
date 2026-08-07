import React, {useState} from 'react';
import Hero from '../components/Hero/Hero';
import { NAV_LINKS } from '../data/navigationData';

export default function FeesAndRequirements(){
  const [copied, setCopied] = useState(null);

  const copy = async (value, key) => {
    try{
      await navigator.clipboard.writeText(value);
      setCopied(key);
      setTimeout(()=> setCopied(null), 1500);
    }catch(e){
      console.error('Copy failed', e);
    }
  }

  return (
    <div>
      <Hero videoSrc="/public/hero.mp4" posterSrc="/public/hero-poster.jpg" />

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold">School Fees & Requirements</h1>
        <p className="mt-2 text-gray-600">Plan your child's school journey with clear information on fees, payment arrangements and essential requirements.</p>

        <section className="mt-8">
          <h2 className="font-semibold">Boarding Fees — Grades 1, 2 & 3</h2>
          <div className="overflow-x-auto mt-3">
            <table className="w-full text-left bg-white rounded shadow">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Term</th>
                  <th className="px-4 py-2">Fee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Term 1</td>
                  <td className="px-4 py-2">KSh 20,100</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-2">Term 2</td>
                  <td className="px-4 py-2">KSh 20,500</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Term 3</td>
                  <td className="px-4 py-2">KSh 20,100</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold">Other School Charges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="p-4 bg-white rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Admission Fee</h3>
                  <p className="text-gray-600">KSh 2,000</p>
                </div>
                <div>
                  <button className="text-sm text-blue-700" onClick={()=> copy('KSh 2000','admission')}>{copied==='admission' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Uniform</h3>
                  <p className="text-gray-600">KSh 13,000</p>
                </div>
                <div>
                  <button className="text-sm text-blue-700" onClick={()=> copy('KSh 13000','uniform')}>{copied==='uniform' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Passport</h3>
                  <p className="text-gray-600">KSh 250</p>
                </div>
                <div>
                  <button className="text-sm text-blue-700" onClick={()=> copy('KSh 250','passport')}>{copied==='passport' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded shadow">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">Text Books / Library</h3>
                  <p className="text-gray-600">KSh 7,350</p>
                </div>
                <div>
                  <button className="text-sm text-blue-700" onClick={()=> copy('KSh 7350','books')}>{copied==='books' ? 'Copied' : 'Copy'}</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold">Bank Payment</h2>
          <div className="p-4 bg-white rounded shadow mt-3 flex items-center justify-between">
            <div>
              <p className="text-sm">Bank: Equity Bank</p>
              <p className="font-mono font-semibold">1460285830194</p>
            </div>
            <div>
              <button onClick={()=> copy('1460285830194','bank')} className="text-sm text-blue-700">{copied==='bank' ? 'Copied' : 'Copy Account Number'}</button>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold">Paybill Payment</h2>
          <div className="p-4 bg-white rounded shadow mt-3 flex items-center justify-between">
            <div>
              <p className="text-sm">Paybill: <span className="font-mono font-semibold">247247</span></p>
              <p className="text-sm">Account: <span className="font-mono font-semibold">780824#NAME/CLASS</span></p>
            </div>
            <div className="space-y-2">
              <button onClick={()=> copy('247247','paybill')} className="block text-sm text-blue-700">{copied==='paybill' ? 'Copied' : 'Copy Paybill'}</button>
              <button onClick={()=> copy('780824#NAME/CLASS','paybill-account')} className="block text-sm text-blue-700">{copied==='paybill-account' ? 'Copied' : 'Copy Paybill Account'}</button>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="font-semibold">Junior Section Requirements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-3 bg-white p-4 rounded shadow">
            {[
              'Golden Bells','Good News Bible','Dictionary','Kamusi Sanifu','Atlas (Moran)','Geometric Set','Plate','Cup','Spoon','Slippers','Oil','Shoe Polish & Brush','Toothpaste','Toothbrush','Pencils','Biros','Toilet Paper','Pads for Girls','Bar Soap','Omo','Black Leather Shoes','White Sports Shoes','Handkerchief'
            ].map(item => (
              <div key={item} className="text-sm p-2 border-b">{item}</div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
