import { useSelector } from 'umi'
import { ConnectState } from '@/models/connect'

export default function useSettings() {
  return useSelector(({ settings }: ConnectState) => settings)
}
