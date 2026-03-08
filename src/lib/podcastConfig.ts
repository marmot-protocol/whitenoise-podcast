import { nip19 } from 'nostr-tools';

/**
 * Podcast configuration for the White Noise podcast site
 * 
 * Edit this file directly to configure your podcast.
 * All values are hardcoded - no environment variables needed!
 * 
 * Update the values in this file directly for production rollout.
 */

export interface PodcastConfig {
  /** The npub of the podcast creator */
  creatorNpub: string;

  /** Podcast metadata */
  podcast: {
    title: string;
    description: string;
    author: string;
    email: string;
    image: string;
    language: string;
    categories: string[];
    explicit: boolean;
    website: string;
    copyright: string;
    funding: string[];
    locked: boolean;
    value: {
      amount: number;
      currency: string;
      recipients: Array<{
        name: string;
        type: 'node' | 'lnaddress';
        address: string;
        split: number;
        customKey?: string;
        customValue?: string;
        fee?: boolean;
      }>;
    };
    type: 'episodic' | 'serial';
    complete: boolean;
    // Podcasting 2.0 fields
    guid: string;
    medium: 'podcast' | 'music' | 'video' | 'film' | 'audiobook' | 'newsletter' | 'blog';
    publisher: string;
    location?: {
      name: string;
      geo?: string;
      osm?: string;
    };
    person: Array<{
      name: string;
      role: string;
      group?: string;
      img?: string;
      href?: string;
    }>;
    license: {
      identifier: string;
      url?: string;
    };
    txt?: Array<{
      purpose: string;
      content: string;
    }>;
    remoteItem?: Array<{
      feedGuid: string;
      feedUrl?: string;
      itemGuid?: string;
      medium?: string;
    }>;
    block?: {
      id: string;
      reason?: string;
    };
    newFeedUrl?: string;
    useOP3: boolean;
  };

  /** RSS feed configuration */
  rss: {
    ttl: number;
  };
}

// =============================================================================
// PODCAST CONFIGURATION
// =============================================================================
// Edit the values below to configure your podcast.
// =============================================================================

export const PODCAST_CONFIG: PodcastConfig = {
  // ===========================================================================
  // CREATOR IDENTITY
  // ===========================================================================
  // Your Nostr public key in npub or hex format
  creatorNpub: "npub1whtn0s68y3cs98zysa4nxrfzss5g5snhndv35tk5m2sudsr7ltms48r3ec",

  podcast: {
    // =========================================================================
    // BASIC PODCAST INFO
    // =========================================================================
    
    // The name of your podcast
    title: "White Noise Podcast",
    
    // A description of your podcast content
    description: "Conversations about privacy, secure messaging, Nostr, and the tools that defend digital freedom.",
    
    // Your name as the podcast author/host
    author: "White Noise",
    
    // Contact email for your podcast
    email: "",
    
    // URL to your podcast cover art image (minimum 1400x1400 pixels recommended)
    image: "https://whitenoise.chat/images/og_preview@1x.png",
    
    // Language code (e.g., en-us, es-es, fr-fr)
    language: "en-us",
    
    // Podcast categories
    categories: ["Technology", "News", "Society & Culture"],
    
    // Whether your podcast contains explicit content
    explicit: false,
    
    // Your podcast website URL
    website: "https://podcast.whitenoise.chat",
    
    // Copyright notice
    copyright: "© 2026 White Noise contributors",

    // =========================================================================
    // PODCASTING 2.0 SETTINGS
    // =========================================================================
    
    // Unique identifier for your podcast (typically your npub)
    guid: "npub1whtn0s68y3cs98zysa4nxrfzss5g5snhndv35tk5m2sudsr7ltms48r3ec",
    
    // Type of podcast content
    medium: "podcast",
    
    // Publisher name (can be same as author)
    publisher: "The Marmot Protocol",
    
    // Podcast type: "episodic" (standalone episodes) or "serial" (sequential)
    type: "episodic",
    
    // Whether the podcast is complete/finished
    complete: false,
    
    // Whether the podcast is locked/premium
    locked: false,

    // =========================================================================
    // LOCATION (Optional)
    // =========================================================================
    // Uncomment and edit to set recording location
    // location: {
    //   name: "City, Country",
    //   geo: "latitude,longitude",
    //   osm: "OpenStreetMap ID",
    // },

    // =========================================================================
    // LICENSE
    // =========================================================================
    license: {
        identifier: "All Rights Reserved",
        url: "https://whitenoise.chat",
    },

    // =========================================================================
    // LIGHTNING VALUE-FOR-VALUE
    // =========================================================================
    value: {
      // Suggested amount per minute in sats
      amount: 1000,
      
      // Currency type
      currency: "sats",
      
      // Payment recipients - splits must add up to 100
      recipients: [
        {
          name: "White Noise",
          type: "lnaddress",
          address: "whitenoise@npub.cash",
          split: 100,
          fee: false,
        },
      ],
    },

    // =========================================================================
    // FUNDING LINKS (Optional)
    // =========================================================================
    // URLs for donation/funding pages
    funding: ["https://whitenoise.chat/contribute"],

    // =========================================================================
    // PODCAST PEOPLE
    // =========================================================================
    // People involved in the podcast
    person: [
      {
        name: "White Noise",
        role: "host",
        group: "cast",
        href: "https://whitenoise.chat",
      },
    ],

    // =========================================================================
    // ANALYTICS
    // =========================================================================
    // Enable OP3.dev analytics (requires VITE_OP3_API_TOKEN env var)
    useOP3: false,

    // =========================================================================
    // ADVANCED SETTINGS (Optional)
    // =========================================================================
    // Uncomment and configure as needed:
    
    // Text metadata
    // txt: [
    //   { purpose: "verify", content: "verification_text" },
    // ],
    
    // Remote item references
    // remoteItem: [
    //   { feedGuid: "guid", feedUrl: "url", itemGuid: "guid", medium: "podcast" },
    // ],
    
    // Content blocking
    // block: {
    //   id: "platform_id",
    //   reason: "reason_text",
    // },
    
    // New feed URL (for podcast migration)
    // newFeedUrl: "https://new-feed-url.com/rss.xml",
  },

  // ===========================================================================
  // RSS FEED SETTINGS
  // ===========================================================================
  rss: {
    // Cache time in minutes
    ttl: 60,
  },
};

/**
 * Nostr event kinds used by the podcast site
 */
export const PODCAST_KINDS = {
  /** Addressable Podcast episodes (editable, replaceable) */
  EPISODE: 30054,
  /** Addressable Podcast trailers (editable, replaceable) */
  TRAILER: 30055,
  /** NIP-22: Comments on podcast episodes */
  COMMENT: 1111,
  /** Standard text notes that may reference episodes */
  NOTE: 1,
  /** Profile metadata */
  PROFILE: 0,
  /** Podcast metadata - using addressable event for podcast-specific config */
  PODCAST_METADATA: 30078
} as const;

/**
 * Get the creator's pubkey in hex format (for Nostr queries)
 */
export function getCreatorPubkeyHex(): string {
  if (!PODCAST_CONFIG.creatorNpub.trim()) {
    return '';
  }

  try {
    const decoded = nip19.decode(PODCAST_CONFIG.creatorNpub);
    if (decoded.type === 'npub') {
      return decoded.data;
    }
    throw new Error('Invalid npub format');
  } catch (error) {
    console.error('Failed to decode creator npub:', error);
    // Fallback to the original value in case it's already hex
    return PODCAST_CONFIG.creatorNpub;
  }
}

/**
 * Check if a pubkey is the podcast creator
 */
export function isPodcastCreator(pubkey: string): boolean {
  const creatorHex = getCreatorPubkeyHex();
  return pubkey === creatorHex;
}
