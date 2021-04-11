import { FLASHPUB_COMMUNITIES } from 'src/configs/flashpub';

export function selectCommunity(
  name: CommunityName,
  communities = FLASHPUB_COMMUNITIES,
) {
  return (
    communities.find((c) => {
      if (typeof window !== 'undefined') {
        if (window.location.pathname.includes(c.name)) return true;
        if (name === c.name) return true;
      }
    }) || communities[0]
  );
}
