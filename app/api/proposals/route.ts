import { NextResponse } from 'next/server';
import { proposals } from '@/app/lib/constants';
import { Proposals } from '@/typings';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type');

    const data: Proposals =  proposals[type] ?? proposals.personal_proposals;
    
    return NextResponse.json({ data });
}