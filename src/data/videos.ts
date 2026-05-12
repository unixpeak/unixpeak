export type VideoProvider = 'youtube' | 'google-drive'

export type TravelVideo = {
  id: string
  title: string
  titleTh: string
  description: string
  provider: VideoProvider
  videoId: string
  href: string
  note?: string
}

export const travelVideos: TravelVideo[] = [
  {
    id: 'unixpeak-main-highlight',
    title: 'Unix Peak Travel Highlight',
    titleTh: 'วิดีโอแนะนำ Unix Peak Travel',
    description:
      'A main video highlight for Unix Peak Travel programs, private trips, and travel planning support.',
    provider: 'google-drive',
    videoId: '1P4lOhM2_9NJLbINB0Y30_2gaNt8YeIXm',
    href: 'https://drive.google.com/file/d/1P4lOhM2_9NJLbINB0Y30_2gaNt8YeIXm/view?usp=sharing',
    note: 'Google Drive video playback depends on public sharing permission.',
  },
  {
    id: 'travel-program-video-one',
    title: 'Travel Program Video',
    titleTh: 'วิดีโอโปรแกรมท่องเที่ยว',
    description:
      'A short travel video from Unix Peak Travel for trip ideas and program inspiration.',
    provider: 'youtube',
    videoId: 'e9pH47f_N3A',
    href: 'https://youtu.be/e9pH47f_N3A',
  },
  {
    id: 'travel-program-video-two',
    title: 'Thailand Tour Video',
    titleTh: 'วิดีโอทัวร์ประเทศไทย',
    description:
      'A video highlight for Thailand tour planning, private trips, and group travel ideas.',
    provider: 'youtube',
    videoId: 'ohRzO-uaG1o',
    href: 'https://youtu.be/ohRzO-uaG1o',
  },
]
