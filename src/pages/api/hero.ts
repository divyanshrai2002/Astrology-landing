import type { NextApiRequest, NextApiResponse } from 'next'
import { HeroApi } from '@/components/landing/types'


export default function handler(_req: NextApiRequest, res: NextApiResponse<HeroApi>){
res.status(200).json({
title: 'Unlock Your Cosmic Destiny',
subtitle: 'Book sessions with expert astrologers and discover your true path.',
ctaText: 'Book Now',
ctaLink: '/book',
imageUrl: '/images/astrologer.png',
badges: [
{ label: '10k+ Sessions', icon: 'Star' },
{ label: 'Rated 4.9/5', icon: 'ThumbsUp' },
{ label: 'Verified Expert', icon: 'ShieldCheck' }
]
})
}

