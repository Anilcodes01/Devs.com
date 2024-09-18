import { NextResponse } from 'next/server'
   import prisma from '@/app/lib/prisma'

    export async function GET() {
      try {
        const userCount = await prisma.user.count()
        return NextResponse.json({ message: 'Database connected', userCount })
      } catch (error) {
        console.error('Database connection error:', error)
        return NextResponse.json(
          { message: 'Database connection failed', error: error instanceof Error ? error.message : String(error) },
          { status: 500 }
        )
      }
    }
    