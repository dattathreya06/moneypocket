"use client";

import { DownloadIcon, Smartphone } from "lucide-react";

export function Download() {
  const handleDownload = () => {
    // Create a link to download the APK
    const link = document.createElement("a");
    link.href = "/money-pocket.apk"; // Path to your APK file
    link.download = "money-pocket.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="download"
      className="py-20 md:py-32 bg-gradient-to-br from-primary/10 to-accent/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-16 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
              <Smartphone className="text-primary" size={40} />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Download Money Pocket Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of happy users and get instant access to quick loans
            with flexible EMI options. Download the app now and get started in
            minutes!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleDownload}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition flex items-center justify-center gap-2 text-lg"
            >
              <DownloadIcon size={24} />
              Download APP
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition text-lg">
              Learn More
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">2 Min</p>
              <p className="text-sm text-muted-foreground">Setup Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">24 Hrs</p>
              <p className="text-sm text-muted-foreground">Fund Transfer</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">₹10K-₹5L</p>
              <p className="text-sm text-muted-foreground">Loan Amount</p>
            </div>
          </div>
        </div>

        {/* APP File Info */}
        <div className="mt-12 bg-muted/50 rounded-2xl p-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            📱 APP File Ready for Download
          </p>
          <p className="text-foreground font-semibold">
            Money Pocket v1.0.0 | Size: 45 MB | Android 8.0+
          </p>
        </div>
      </div>
    </section>
  );
}
