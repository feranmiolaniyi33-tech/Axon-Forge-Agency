const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    experimental: { workerThreads: false, cpus: 1 }
};

export default nextConfig;
