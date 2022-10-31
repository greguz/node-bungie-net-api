# Enums

## `ApplicationScopes`

- **ReadBasicUserProfile**: 1
  > Read basic user profile information such as the user's handle, avatar icon, etc.
- **ReadGroups**: 2
  > Read Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
- **WriteGroups**: 4
  > Write Group/Clan Forums, Wall, and Members for groups and clans that the user has joined.
- **AdminGroups**: 8
  > Administer Group/Clan Forums, Wall, and Members for groups and clans that the user is a founder or an administrator.
- **BnetWrite**: 16
  > Create new groups, clans, and forum posts, along with other actions that are reserved for Bungie.net elevated scope: not meant to be used by third party applications.
- **MoveEquipDestinyItems**: 32
  > Move or equip Destiny items
- **ReadDestinyInventoryAndVault**: 64
  > Read Destiny 1 Inventory and Vault contents. For Destiny 2, this scope is needed to read anything regarded as private. This is the only scope a Destiny 2 app needs for read operations against Destiny 2 data such as inventory, vault, currency, vendors, milestones, progression, etc.
- **ReadUserData**: 128
  > Read user data such as who they are web notifications, clan/group memberships, recent activity, muted users.
- **EditUserData**: 256
  > Edit user data such as preferred language, status, motto, avatar selection and theme.
- **ReadDestinyVendorsAndAdvisors**: 512
  > Access vendor and advisor data specific to a user. OBSOLETE. This scope is only used on the Destiny 1 API.
- **ReadAndApplyTokens**: 1024
  > Read offer history and claim and apply tokens for the user.
- **AdvancedWriteActions**: 2048
  > Can perform actions that will result in a prompt to the user via the Destiny app.
- **PartnerOfferGrant**: 4096
  > Can use the partner offer api to claim rewards defined for a partner
- **DestinyUnlockValueQuery**: 8192
  > Allows an app to query sensitive information like unlock flags and values not available through normal methods.
- **UserPiiRead**: 16384
  > Allows an app to query sensitive user PII, most notably email information.

Source: [Applications.ApplicationScopes](https://bungie-net.github.io/#/components/schemas/Applications.ApplicationScopes)

## `ApplicationStatus`

- **None**: 0
  > No value assigned
- **Private**: 1
  > Application exists and works but will not appear in any public catalog. New applications start in this state, test applications will remain in this state.
- **Public**: 2
  > Active applications that can appear in an catalog.
- **Disabled**: 3
  > Application disabled by the owner. All authorizations will be treated as terminated while in this state. Owner can move back to private or public state.
- **Blocked**: 4
  > Application has been blocked by Bungie. It cannot be transitioned out of this state by the owner. Authorizations are terminated when an application is in this state.

Source: [Applications.ApplicationStatus](https://bungie-net.github.io/#/components/schemas/Applications.ApplicationStatus)

## `DeveloperRole`

- **None**: 0
- **Owner**: 1
- **TeamMember**: 2

Source: [Applications.DeveloperRole](https://bungie-net.github.io/#/components/schemas/Applications.DeveloperRole)

## `BungieMembershipType`

The types of membership the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.MembershipType.

- **None**: 0
- **TigerXbox**: 1
- **TigerPsn**: 2
- **TigerSteam**: 3
- **TigerBlizzard**: 4
- **TigerStadia**: 5
- **TigerEgs**: 6
- **TigerDemon**: 10
- **BungieNext**: 254
- **All**: -1
  > "All" is only valid for searching capabilities: you need to pass the actual matching BungieMembershipType for any query where you pass a known membershipId.

Source: [BungieMembershipType](https://bungie-net.github.io/#/components/schemas/BungieMembershipType)

## `IgnoreStatus`

- **NotIgnored**: 0
- **IgnoredUser**: 1
- **IgnoredGroup**: 2
- **IgnoredByGroup**: 4
- **IgnoredPost**: 8
- **IgnoredTag**: 16
- **IgnoredGlobal**: 32

Source: [Ignores.IgnoreStatus](https://bungie-net.github.io/#/components/schemas/Ignores.IgnoreStatus)

## `BungieCredentialType`

The types of credentials the Accounts system supports. This is the external facing enum used in place of the internal-only Bungie.SharedDefinitions.CredentialType.

- **None**: 0
- **Xuid**: 1
- **Psnid**: 2
- **Wlid**: 3
- **Fake**: 4
- **Facebook**: 5
- **Google**: 8
- **Windows**: 9
- **DemonId**: 10
- **SteamId**: 12
- **BattleNetId**: 14
- **StadiaId**: 16
- **TwitchId**: 18
- **EgsId**: 20

Source: [BungieCredentialType](https://bungie-net.github.io/#/components/schemas/BungieCredentialType)

## `ContentPropertyDataTypeEnum`

- **None**: 0
- **Plaintext**: 1
- **Html**: 2
- **Dropdown**: 3
- **List**: 4
- **Json**: 5
- **Content**: 6
- **Representation**: 7
- **Set**: 8
- **File**: 9
- **FolderSet**: 10
- **Date**: 11
- **MultilinePlaintext**: 12
- **DestinyContent**: 13
- **Color**: 14

Source: [Content.Models.ContentPropertyDataTypeEnum](https://bungie-net.github.io/#/components/schemas/Content.Models.ContentPropertyDataTypeEnum)

## `ForumTopicsCategoryFiltersEnum`

- **None**: 0
- **Links**: 1
- **Questions**: 2
- **AnsweredQuestions**: 4
- **Media**: 8
- **TextOnly**: 16
- **Announcement**: 32
- **BungieOfficial**: 64
- **Polls**: 128

Source: [Forum.ForumTopicsCategoryFiltersEnum](https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsCategoryFiltersEnum)

## `ForumTopicsQuickDateEnum`

- **All**: 0
- **LastYear**: 1
- **LastMonth**: 2
- **LastWeek**: 3
- **LastDay**: 4

Source: [Forum.ForumTopicsQuickDateEnum](https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsQuickDateEnum)

## `ForumTopicsSortEnum`

- **Default**: 0
- **LastReplied**: 1
- **MostReplied**: 2
- **Popularity**: 3
- **Controversiality**: 4
- **Liked**: 5
- **HighestRated**: 6
- **MostUpvoted**: 7

Source: [Forum.ForumTopicsSortEnum](https://bungie-net.github.io/#/components/schemas/Forum.ForumTopicsSortEnum)

## `ForumMediaType`

- **None**: 0
- **Image**: 1
- **Video**: 2
- **Youtube**: 3

Source: [Forum.ForumMediaType](https://bungie-net.github.io/#/components/schemas/Forum.ForumMediaType)

## `ForumPostPopularity`

- **Empty**: 0
- **Default**: 1
- **Discussed**: 2
- **CoolStory**: 3
- **HeatingUp**: 4
- **Hot**: 5

Source: [Forum.ForumPostPopularity](https://bungie-net.github.io/#/components/schemas/Forum.ForumPostPopularity)

## `ForumPostCategoryEnums`

- **None**: 0
- **TextOnly**: 1
- **Media**: 2
- **Link**: 4
- **Poll**: 8
- **Question**: 16
- **Answered**: 32
- **Announcement**: 64
- **ContentComment**: 128
- **BungieOfficial**: 256
- **NinjaOfficial**: 512
- **Recruitment**: 1024

Source: [Forums.ForumPostCategoryEnums](https://bungie-net.github.io/#/components/schemas/Forums.ForumPostCategoryEnums)

## `ForumFlagsEnum`

- **None**: 0
- **BungieStaffPost**: 1
- **ForumNinjaPost**: 2
- **ForumMentorPost**: 4
- **TopicBungieStaffPosted**: 8
- **TopicBungieVolunteerPosted**: 16
- **QuestionAnsweredByBungie**: 32
- **QuestionAnsweredByNinja**: 64
- **CommunityContent**: 128

Source: [Forums.ForumFlagsEnum](https://bungie-net.github.io/#/components/schemas/Forums.ForumFlagsEnum)

## `GroupType`

- **General**: 0
- **Clan**: 1

Source: [GroupsV2.GroupType](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupType)

## `ChatSecuritySetting`

- **Group**: 0
- **Admins**: 1

Source: [GroupsV2.ChatSecuritySetting](https://bungie-net.github.io/#/components/schemas/GroupsV2.ChatSecuritySetting)

## `GroupHomepage`

- **Wall**: 0
- **Forum**: 1
- **AllianceForum**: 2

Source: [GroupsV2.GroupHomepage](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupHomepage)

## `MembershipOption`

- **Reviewed**: 0
- **Open**: 1
- **Closed**: 2

Source: [GroupsV2.MembershipOption](https://bungie-net.github.io/#/components/schemas/GroupsV2.MembershipOption)

## `GroupPostPublicity`

- **Public**: 0
- **Alliance**: 1
- **Private**: 2

Source: [GroupsV2.GroupPostPublicity](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupPostPublicity)

## `Capabilities`

- **None**: 0
- **Leaderboards**: 1
- **Callsign**: 2
- **OptionalConversations**: 4
- **ClanBanner**: 8
- **D2InvestmentData**: 16
- **Tags**: 32
- **Alliances**: 64

Source: [GroupsV2.Capabilities](https://bungie-net.github.io/#/components/schemas/GroupsV2.Capabilities)

## `HostGuidedGamesPermissionLevel`

Used for setting the guided game permission level override (admins and founders can always host guided games).

- **None**: 0
- **Beginner**: 1
- **Member**: 2

Source: [GroupsV2.HostGuidedGamesPermissionLevel](https://bungie-net.github.io/#/components/schemas/GroupsV2.HostGuidedGamesPermissionLevel)

## `RuntimeGroupMemberType`

The member levels used by all V2 Groups API. Individual group types use their own mappings in their native storage (general uses BnetDbGroupMemberType and D2 clans use ClanMemberLevel), but they are all translated to this in the runtime api. These runtime values should NEVER be stored anywhere, so the values can be changed as necessary.

- **None**: 0
- **Beginner**: 1
- **Member**: 2
- **Admin**: 3
- **ActingFounder**: 4
- **Founder**: 5

Source: [GroupsV2.RuntimeGroupMemberType](https://bungie-net.github.io/#/components/schemas/GroupsV2.RuntimeGroupMemberType)

## `DestinyProgressionRewardItemState`

Represents the different states a progression reward item can be in.

- **None**: 0
- **Invisible**: 1
  > If this is set, the reward should be hidden.
- **Earned**: 2
  > If this is set, the reward has been earned.
- **Claimed**: 4
  > If this is set, the reward has been claimed.
- **ClaimAllowed**: 8
  > If this is set, the reward is allowed to be claimed by this Character. An item can be earned but still can't be claimed in certain circumstances, like if it's only allowed for certain subclasses. It also might not be able to be claimed if you already claimed it!

Source: [Destiny.DestinyProgressionRewardItemState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionRewardItemState)

## `DestinyProgressionScope`

There are many Progressions in Destiny (think Character Level, or Reputation). These are the various "Scopes" of Progressions, which affect many things: * Where/if they are stored * How they are calculated * Where they can be used in other game logic

- **Account**: 0
- **Character**: 1
- **Clan**: 2
- **Item**: 3
- **ImplicitFromEquipment**: 4
- **Mapped**: 5
- **MappedAggregate**: 6
- **MappedStat**: 7
- **MappedUnlockValue**: 8

Source: [Destiny.DestinyProgressionScope](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionScope)

## `DestinyProgressionStepDisplayEffect`

If progression is earned, this determines whether the progression shows visual effects on the character or its item - or neither.

- **None**: 0
- **Character**: 1
- **Item**: 2

Source: [Destiny.DestinyProgressionStepDisplayEffect](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionStepDisplayEffect)

## `SocketTypeActionType`

Indicates the type of actions that can be performed

- **InsertPlug**: 0
- **InfuseItem**: 1
- **ReinitializeSocket**: 2

Source: [Destiny.SocketTypeActionType](https://bungie-net.github.io/#/components/schemas/Destiny.SocketTypeActionType)

## `DestinySocketVisibility`

- **Visible**: 0
- **Hidden**: 1
- **HiddenWhenEmpty**: 2
- **HiddenIfNoPlugsAvailable**: 3

Source: [Destiny.DestinySocketVisibility](https://bungie-net.github.io/#/components/schemas/Destiny.DestinySocketVisibility)

## `DestinySocketCategoryStyle`

Represents the possible and known UI styles used by the game for rendering Socket Categories.

- **Unknown**: 0
- **Reusable**: 1
- **Consumable**: 2
- **Unlockable**: 3
- **Intrinsic**: 4
- **EnergyMeter**: 5
- **LargePerk**: 6
- **Abilities**: 7
- **Supers**: 8

Source: [Destiny.DestinySocketCategoryStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinySocketCategoryStyle)

## `TierType`

- **Unknown**: 0
- **Currency**: 1
- **Basic**: 2
- **Common**: 3
- **Rare**: 4
- **Superior**: 5
- **Exotic**: 6

Source: [Destiny.TierType](https://bungie-net.github.io/#/components/schemas/Destiny.TierType)

## `BucketScope`

- **Character**: 0
- **Account**: 1

Source: [Destiny.BucketScope](https://bungie-net.github.io/#/components/schemas/Destiny.BucketScope)

## `BucketCategory`

- **Invisible**: 0
- **Item**: 1
- **Currency**: 2
- **Equippable**: 3
- **Ignored**: 4

Source: [Destiny.BucketCategory](https://bungie-net.github.io/#/components/schemas/Destiny.BucketCategory)

## `ItemLocation`

- **Unknown**: 0
- **Inventory**: 1
- **Vault**: 2
- **Vendor**: 3
- **Postmaster**: 4

Source: [Destiny.ItemLocation](https://bungie-net.github.io/#/components/schemas/Destiny.ItemLocation)

## `DestinyStatAggregationType`

When a Stat (DestinyStatDefinition) is aggregated, this is the rules used for determining the level and formula used for aggregation. * CharacterAverage = apply a weighted average using the related DestinyStatGroupDefinition on the DestinyInventoryItemDefinition across the character's equipped items. See both of those definitions for details. * Character = don't aggregate: the stat should be located and used directly on the character. * Item = don't aggregate: the stat should be located and used directly on the item.

- **CharacterAverage**: 0
- **Character**: 1
- **Item**: 2

Source: [Destiny.DestinyStatAggregationType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStatAggregationType)

## `DestinyStatCategory`

At last, stats have categories. Use this for whatever purpose you might wish.

- **Gameplay**: 0
- **Weapon**: 1
- **Defense**: 2
- **Primary**: 3

Source: [Destiny.DestinyStatCategory](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyStatCategory)

## `EquippingItemBlockAttributes`

- **None**: 0
- **EquipOnAcquire**: 1

Source: [Destiny.EquippingItemBlockAttributes](https://bungie-net.github.io/#/components/schemas/Destiny.EquippingItemBlockAttributes)

## `DestinyAmmunitionType`

- **None**: 0
- **Primary**: 1
- **Special**: 2
- **Heavy**: 3
- **Unknown**: 4

Source: [Destiny.DestinyAmmunitionType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyAmmunitionType)

## `DestinyClass`

- **Titan**: 0
- **Hunter**: 1
- **Warlock**: 2
- **Unknown**: 3

Source: [Destiny.DestinyClass](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyClass)

## `DestinyGender`

- **Male**: 0
- **Female**: 1
- **Unknown**: 2

Source: [Destiny.DestinyGender](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGender)

## `DestinyVendorProgressionType`

Describes the type of progression that a vendor has.

- **Default**: 0
  > The original rank progression from token redemption.
- **Ritual**: 1
  > Progression from ranks in ritual content. For example: Crucible (Shaxx), Gambit (Drifter), and Season 13 Battlegrounds (War Table).
- **NoSeasonalRefresh**: 2
  > A vendor progression with no seasonal refresh. For example: Xur in the Eternity destination for the 30th Anniversary.

Source: [Destiny.DestinyVendorProgressionType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorProgressionType)

## `VendorDisplayCategorySortOrder`

Display categories can have custom sort orders. These are the possible options.

- **Default**: 0
- **SortByTier**: 1

Source: [Destiny.VendorDisplayCategorySortOrder](https://bungie-net.github.io/#/components/schemas/Destiny.VendorDisplayCategorySortOrder)

## `DestinyVendorInteractionRewardSelection`

When a Vendor Interaction provides rewards, they'll either let you choose one or let you have all of them. This determines which it will be.

- **None**: 0
- **One**: 1
- **All**: 2

Source: [Destiny.DestinyVendorInteractionRewardSelection](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorInteractionRewardSelection)

## `DestinyVendorReplyType`

This determines the type of reply that a Vendor will have during an Interaction.

- **Accept**: 0
- **Decline**: 1
- **Complete**: 2

Source: [Destiny.DestinyVendorReplyType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorReplyType)

## `VendorInteractionType`

An enumeration of the known UI interactions for Vendors.

- **Unknown**: 0
- **Undefined**: 1
  > An empty interaction. If this ends up in content, it is probably a game bug.
- **QuestComplete**: 2
  > An interaction shown when you complete a quest and receive a reward.
- **QuestContinue**: 3
  > An interaction shown when you talk to a Vendor as an intermediary step of a quest.
- **ReputationPreview**: 4
  > An interaction shown when you are previewing the vendor's reputation rewards.
- **RankUpReward**: 5
  > An interaction shown when you rank up with the vendor.
- **TokenTurnIn**: 6
  > An interaction shown when you have tokens to turn in for the vendor.
- **QuestAccept**: 7
  > An interaction shown when you're accepting a new quest.
- **ProgressTab**: 8
  > Honestly, this doesn't seem consistent to me. It is used to give you choices in the Cryptarch as well as some reward prompts by the Eververse vendor. I'll have to look into that further at some point.
- **End**: 9
  > These seem even less consistent. I don't know what these are.
- **Start**: 10
  > Also seem inconsistent. I also don't know what these are offhand.

Source: [Destiny.VendorInteractionType](https://bungie-net.github.io/#/components/schemas/Destiny.VendorInteractionType)

## `DestinyItemSortType`

Determines how items are sorted in an inventory bucket.

- **ItemId**: 0
- **Timestamp**: 1
- **StackSize**: 2

Source: [Destiny.DestinyItemSortType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyItemSortType)

## `DestinyVendorItemRefundPolicy`

The action that happens when the user attempts to refund an item.

- **NotRefundable**: 0
- **DeletesItem**: 1
- **RevokesLicense**: 2

Source: [Destiny.DestinyVendorItemRefundPolicy](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorItemRefundPolicy)

## `DestinyGatingScope`

This enumeration represents the most restrictive type of gating that is being performed by an entity. This is useful as a shortcut to avoid a lot of lookups when determining whether the gating on an Entity applies to everyone equally, or to their specific Profile or Character states. None = There is no gating on this item. Global = The gating on this item is based entirely on global game state. It will be gated the same for everyone. Clan = The gating on this item is at the Clan level. For instance, if you're gated by Clan level this will be the case. Profile = The gating includes Profile-specific checks, but not on the Profile's characters. An example of this might be when you acquire an Emblem: the Emblem will be available in your Kiosk for all characters in your Profile from that point onward. Character = The gating includes Character-specific checks, including character level restrictions. An example of this might be an item that you can't purchase from a Vendor until you reach a specific Character Level. Item = The gating includes item-specific checks. For BNet, this generally implies that we'll show this data only on a character level or deeper. AssumedWorstCase = The unlocks and checks being used for this calculation are of an unknown type and are used for unknown purposes. For instance, if some great person decided that an unlock value should be globally scoped, but then the game changes it using character-specific data in a way that BNet doesn't know about. Because of the open-ended potential for this to occur, many unlock checks for "globally" scoped unlock data may be assumed as the worst case unless it has been specifically whitelisted as otherwise. That sucks, but them's the breaks.

- **None**: 0
- **Global**: 1
- **Clan**: 2
- **Profile**: 3
- **Character**: 4
- **Item**: 5
- **AssumedWorstCase**: 6

Source: [Destiny.DestinyGatingScope](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGatingScope)

## `ActivityGraphNodeHighlightType`

The various known UI styles in which an item can be highlighted. It'll be up to you to determine what you want to show based on this highlighting, BNet doesn't have any assets that correspond to these states. And yeah, RiseOfIron and Comet have their own special highlight states. Don't ask me, I can't imagine they're still used.

- **None**: 0
- **Normal**: 1
- **Hyper**: 2
- **Comet**: 3
- **RiseOfIron**: 4

Source: [Destiny.ActivityGraphNodeHighlightType](https://bungie-net.github.io/#/components/schemas/Destiny.ActivityGraphNodeHighlightType)

## `DestinyUnlockValueUIStyle`

If you're showing an unlock value in the UI, this is the format in which it should be shown. You'll have to build your own algorithms on the client side to determine how best to render these options.

- **Automatic**: 0
  > Generally, Automatic means "Just show the number"
- **Fraction**: 1
  > Show the number as a fractional value. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
- **Checkbox**: 2
  > Show the number as a checkbox. 0 Will mean unchecked, any other value will mean checked.
- **Percentage**: 3
  > Show the number as a percentage. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
- **DateTime**: 4
  > Show the number as a date and time. The number will be the number of seconds since the Unix Epoch (January 1st, 1970 at midnight UTC). It'll be up to you to convert this into a date and time format understandable to the user in their time zone.
- **FractionFloat**: 5
  > Show the number as a floating point value that represents a fraction, where 0 is min and 1 is max. For this to make sense, the value being displayed should have a comparable upper bound, like the progress to the next level of a Progression.
- **Integer**: 6
  > Show the number as a straight-up integer.
- **TimeDuration**: 7
  > Show the number as a time duration. The value will be returned as seconds.
- **Hidden**: 8
  > Don't bother showing the value at all, it's not easily human-interpretable, and used for some internal purpose.
- **Multiplier**: 9
  > Example: "1.5x"
- **GreenPips**: 10
  > Show the value as a series of green pips, like the wins in a Trials of Osiris score card.
- **RedPips**: 11
  > Show the value as a series of red pips, like the losses in a Trials of Osiris score card.
- **ExplicitPercentage**: 12
  > Show the value as a percentage. For example: "51%" - Does no division, only appends '%'
- **RawFloat**: 13
  > Show the value as a floating-point number. For example: "4.52" NOTE: Passed along from Investment as whole number with last two digits as decimal values (452 -> 4.52)
- **LevelAndReward**: 14
  > Show the value as a level and a reward.

Source: [Destiny.DestinyUnlockValueUIStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyUnlockValueUIStyle)

## `DestinyObjectiveGrantStyle`

Some Objectives provide perks, generally as part of providing some kind of interesting modifier for a Challenge or Quest. This indicates when the Perk is granted.

- **WhenIncomplete**: 0
- **WhenComplete**: 1
- **Always**: 2

Source: [Destiny.DestinyObjectiveGrantStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyObjectiveGrantStyle)

## `DamageType`

- **None**: 0
- **Kinetic**: 1
- **Arc**: 2
- **Thermal**: 3
- **Void**: 4
- **Raid**: 5
- **Stasis**: 6

Source: [Destiny.DamageType](https://bungie-net.github.io/#/components/schemas/Destiny.DamageType)

## `DestinyTalentNodeStepWeaponPerformances`

- **None**: 0
- **RateOfFire**: 1
- **Damage**: 2
- **Accuracy**: 4
- **Range**: 8
- **Zoom**: 16
- **Recoil**: 32
- **Ready**: 64
- **Reload**: 128
- **HairTrigger**: 256
- **AmmoAndMagazine**: 512
- **TrackingAndDetonation**: 1024
- **ShotgunSpread**: 2048
- **ChargeTime**: 4096
- **All**: 8191

Source: [Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepWeaponPerformances)

## `DestinyTalentNodeStepImpactEffects`

- **None**: 0
- **ArmorPiercing**: 1
- **Ricochet**: 2
- **Flinch**: 4
- **CollateralDamage**: 8
- **Disorient**: 16
- **HighlightTarget**: 32
- **All**: 63

Source: [Destiny.Definitions.DestinyTalentNodeStepImpactEffects](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepImpactEffects)

## `DestinyTalentNodeStepGuardianAttributes`

- **None**: 0
- **Stats**: 1
- **Shields**: 2
- **Health**: 4
- **Revive**: 8
- **AimUnderFire**: 16
- **Radar**: 32
- **Invisibility**: 64
- **Reputations**: 128
- **All**: 255

Source: [Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepGuardianAttributes)

## `DestinyTalentNodeStepLightAbilities`

- **None**: 0
- **Grenades**: 1
- **Melee**: 2
- **MovementModes**: 4
- **Orbs**: 8
- **SuperEnergy**: 16
- **SuperMods**: 32
- **All**: 63

Source: [Destiny.Definitions.DestinyTalentNodeStepLightAbilities](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepLightAbilities)

## `DestinyTalentNodeStepDamageTypes`

- **None**: 0
- **Kinetic**: 1
- **Arc**: 2
- **Solar**: 4
- **Void**: 8
- **All**: 15

Source: [Destiny.Definitions.DestinyTalentNodeStepDamageTypes](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyTalentNodeStepDamageTypes)

## `DestinyObjectiveUiStyle`

If the objective has a known UI label, this enumeration will represent it.

- **None**: 0
- **Highlighted**: 1
- **CraftingWeaponLevel**: 2
- **CraftingWeaponLevelProgress**: 3
- **CraftingWeaponTimestamp**: 4
- **CraftingMementos**: 5
- **CraftingMementoTitle**: 6

Source: [Destiny.DestinyObjectiveUiStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyObjectiveUiStyle)

## `DestinyActivityNavPointType`

- **Inactive**: 0
- **PrimaryObjective**: 1
- **SecondaryObjective**: 2
- **TravelObjective**: 3
- **PublicEventObjective**: 4
- **AmmoCache**: 5
- **PointTypeFlag**: 6
- **CapturePoint**: 7
- **DefensiveEncounter**: 8
- **GhostInteraction**: 9
- **KillAi**: 10
- **QuestItem**: 11
- **PatrolMission**: 12
- **Incoming**: 13
- **ArenaObjective**: 14
- **AutomationHint**: 15
- **TrackedQuest**: 16

Source: [Destiny.DestinyActivityNavPointType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityNavPointType)

## `DestinyActivityModeType`

For historical reasons, this list will have both D1 and D2-relevant Activity Modes in it. Please don't take this to mean that some D1-only feature is coming back!

- **None**: 0
- **Story**: 2
- **Strike**: 3
- **Raid**: 4
- **AllPvP**: 5
- **Patrol**: 6
- **AllPvE**: 7
- **Reserved9**: 9
- **Control**: 10
- **Reserved11**: 11
- **Clash**: 12
  > Clash -> Destiny's name for Team Deathmatch. 4v4 combat, the team with the highest kills at the end of time wins.
- **Reserved13**: 13
- **CrimsonDoubles**: 15
- **Nightfall**: 16
- **HeroicNightfall**: 17
- **AllStrikes**: 18
- **IronBanner**: 19
- **Reserved20**: 20
- **Reserved21**: 21
- **Reserved22**: 22
- **Reserved24**: 24
- **AllMayhem**: 25
- **Reserved26**: 26
- **Reserved27**: 27
- **Reserved28**: 28
- **Reserved29**: 29
- **Reserved30**: 30
- **Supremacy**: 31
- **PrivateMatchesAll**: 32
- **Survival**: 37
- **Countdown**: 38
- **TrialsOfTheNine**: 39
- **Social**: 40
- **TrialsCountdown**: 41
- **TrialsSurvival**: 42
- **IronBannerControl**: 43
- **IronBannerClash**: 44
- **IronBannerSupremacy**: 45
- **ScoredNightfall**: 46
- **ScoredHeroicNightfall**: 47
- **Rumble**: 48
- **AllDoubles**: 49
- **Doubles**: 50
- **PrivateMatchesClash**: 51
- **PrivateMatchesControl**: 52
- **PrivateMatchesSupremacy**: 53
- **PrivateMatchesCountdown**: 54
- **PrivateMatchesSurvival**: 55
- **PrivateMatchesMayhem**: 56
- **PrivateMatchesRumble**: 57
- **HeroicAdventure**: 58
- **Showdown**: 59
- **Lockdown**: 60
- **Scorched**: 61
- **ScorchedTeam**: 62
- **Gambit**: 63
- **AllPvECompetitive**: 64
- **Breakthrough**: 65
- **BlackArmoryRun**: 66
- **Salvage**: 67
- **IronBannerSalvage**: 68
- **PvPCompetitive**: 69
- **PvPQuickplay**: 70
- **ClashQuickplay**: 71
- **ClashCompetitive**: 72
- **ControlQuickplay**: 73
- **ControlCompetitive**: 74
- **GambitPrime**: 75
- **Reckoning**: 76
- **Menagerie**: 77
- **VexOffensive**: 78
- **NightmareHunt**: 79
- **Elimination**: 80
- **Momentum**: 81
- **Dungeon**: 82
- **Sundial**: 83
- **TrialsOfOsiris**: 84
- **Dares**: 85
- **Offensive**: 86
- **LostSector**: 87
- **Rift**: 88
- **ZoneControl**: 89
- **IronBannerRift**: 90

Source: [Destiny.HistoricalStats.Definitions.DestinyActivityModeType](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyActivityModeType)

## `DestinyActivityModeCategory`

Activity Modes are grouped into a few possible broad categories.

- **None**: 0
  > Activities that are neither PVP nor PVE, such as social activities.
- **PvE**: 1
  > PvE activities, where you shoot aliens in the face.
- **PvP**: 2
  > PvP activities, where you shoot your "friends".
- **PvECompetitive**: 3
  > PVE competitive activities, where you shoot whoever you want whenever you want. Or run around collecting small glowing triangles.

Source: [Destiny.DestinyActivityModeCategory](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityModeCategory)

## `DestinyItemSubType`

This Enumeration further classifies items by more specific categorizations than DestinyItemType. The "Sub-Type" is where we classify and categorize items one step further in specificity: "Auto Rifle" instead of just "Weapon" for example, or "Vanguard Bounty" instead of merely "Bounty". These sub-types are provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a "best guess" fit. NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.

- **None**: 0
- **Crucible**: 1
  > DEPRECATED. Items can be both "Crucible" and something else interesting.
- **Vanguard**: 2
  > DEPRECATED. An item can both be "Vanguard" and something else.
- **Exotic**: 5
  > DEPRECATED. An item can both be Exotic and something else.
- **AutoRifle**: 6
- **Shotgun**: 7
- **Machinegun**: 8
- **HandCannon**: 9
- **RocketLauncher**: 10
- **FusionRifle**: 11
- **SniperRifle**: 12
- **PulseRifle**: 13
- **ScoutRifle**: 14
- **Crm**: 16
  > DEPRECATED. An item can both be CRM and something else.
- **Sidearm**: 17
- **Sword**: 18
- **Mask**: 19
- **Shader**: 20
- **Ornament**: 21
- **FusionRifleLine**: 22
- **GrenadeLauncher**: 23
- **SubmachineGun**: 24
- **TraceRifle**: 25
- **HelmetArmor**: 26
- **GauntletsArmor**: 27
- **ChestArmor**: 28
- **LegArmor**: 29
- **ClassArmor**: 30
- **Bow**: 31
- **DummyRepeatableBounty**: 32
- **Glaive**: 33

Source: [Destiny.DestinyItemSubType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyItemSubType)

## `DestinyGraphNodeState`

Represents a potential state of an Activity Graph node.

- **Hidden**: 0
- **Visible**: 1
- **Teaser**: 2
- **Incomplete**: 3
- **Completed**: 4

Source: [Destiny.DestinyGraphNodeState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGraphNodeState)

## `DestinyRewardSourceCategory`

BNet's custom categorization of reward sources. We took a look at the existing ways that items could be spawned, and tried to make high-level categorizations of them. This needs to be re-evaluated for Destiny 2.

- **None**: 0
  > The source doesn't fit well into any of the other types.
- **Activity**: 1
  > The source is directly related to the rewards gained by playing an activity or set of activities. This currently includes Quests and other action in-game.
- **Vendor**: 2
  > This source is directly related to items that Vendors sell.
- **Aggregate**: 3
  > This source is a custom aggregation of items that can be earned in many ways, but that share some other property in common that is useful to share. For instance, in Destiny 1 we would make "Reward Sources" for every game expansion: that way, you could search reward sources to see what items became available with any given Expansion.

Source: [Destiny.Definitions.DestinyRewardSourceCategory](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.DestinyRewardSourceCategory)

## `DestinyPresentationNodeType`

- **Default**: 0
- **Category**: 1
- **Collectibles**: 2
- **Records**: 3
- **Metric**: 4
- **Craftable**: 5

Source: [Destiny.DestinyPresentationNodeType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationNodeType)

## `DestinyScope`

There's a lot of places where we need to know scope on more than just a profile or character level. For everything else, there's this more generic sense of scope.

- **Profile**: 0
- **Character**: 1

Source: [Destiny.DestinyScope](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyScope)

## `DestinyPresentationDisplayStyle`

A hint for how the presentation node should be displayed when shown in a list. How you use this is your UI is up to you.

- **Category**: 0
  > Display the item as a category, through which sub-items are filtered.
- **Badge**: 1
- **Medals**: 2
- **Collectible**: 3
- **Record**: 4

Source: [Destiny.DestinyPresentationDisplayStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationDisplayStyle)

## `DestinyRecordValueStyle`

- **Integer**: 0
- **Percentage**: 1
- **Milliseconds**: 2
- **Boolean**: 3
- **Decimal**: 4

Source: [Destiny.DestinyRecordValueStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyRecordValueStyle)

## `DestinyRecordToastStyle`

- **None**: 0
- **Record**: 1
- **Lore**: 2
- **Badge**: 3
- **MetaRecord**: 4
- **MedalComplete**: 5
- **SeasonChallengeComplete**: 6
- **GildedTitleComplete**: 7
- **CraftingRecipeUnlocked**: 8

Source: [Destiny.DestinyRecordToastStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyRecordToastStyle)

## `DestinyPresentationScreenStyle`

A hint for what screen should be shown when this presentation node is clicked into. How you use this is your UI is up to you.

- **Default**: 0
  > Use the "default" view for the presentation nodes.
- **CategorySets**: 1
  > Show sub-items as "category sets". In-game, you'd see these as a vertical list of child presentation nodes - armor sets for example - and the icons of items within those sets displayed horizontally.
- **Badge**: 2
  > Show sub-items as Badges. (I know, I know. We don't need no stinkin' badges har har har)

Source: [Destiny.DestinyPresentationScreenStyle](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationScreenStyle)

## `PlugUiStyles`

If the plug has a specific custom style, this enumeration will represent that style/those styles.

- **None**: 0
- **Masterwork**: 1

Source: [Destiny.PlugUiStyles](https://bungie-net.github.io/#/components/schemas/Destiny.PlugUiStyles)

## `PlugAvailabilityMode`

This enum determines whether the plug is available to be inserted. - Normal means that all existing rules for plug insertion apply. - UnavailableIfSocketContainsMatchingPlugCategory means that the plug is only available if the socket does NOT match the plug category. - AvailableIfSocketContainsMatchingPlugCategory means that the plug is only available if the socket DOES match the plug category. For category matching, use the plug's "plugCategoryIdentifier" property, comparing it to

- **Normal**: 0
- **UnavailableIfSocketContainsMatchingPlugCategory**: 1
- **AvailableIfSocketContainsMatchingPlugCategory**: 2

Source: [Destiny.PlugAvailabilityMode](https://bungie-net.github.io/#/components/schemas/Destiny.PlugAvailabilityMode)

## `DestinyEnergyType`

Represents the socket energy types for Armor 2.0, Ghosts 2.0, and Stasis subclasses.

- **Any**: 0
- **Arc**: 1
- **Thermal**: 2
- **Void**: 3
- **Ghost**: 4
- **Subclass**: 5
- **Stasis**: 6

Source: [Destiny.DestinyEnergyType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyEnergyType)

## `SocketPlugSources`

Indicates how a socket is populated, and where you should look for valid plug data.  This is a flags enumeration/bitmask field, as you may have to look in multiple sources across multiple components for valid plugs.  For instance, a socket could have plugs that are sourced from its own definition, as well as plugs that are sourced from Character-scoped AND profile-scoped Plug Sets. Only by combining plug data for every indicated source will you be able to know all of the plugs available for a socket.

- **None**: 0
  > If there's no way we can detect to insert new plugs.
- **InventorySourced**: 1
  > Use plugs found in the player's inventory, based on the socket type rules (see DestinySocketTypeDefinition for more info) Note that a socket - like Shaders - can have *both* reusable plugs and inventory items inserted theoretically.
- **ReusablePlugItems**: 2
  > Use the DestinyItemSocketsComponent.sockets.reusablePlugs property to determine which plugs are valid for this socket. This may have to be combined with other sources, such as plug sets, if those flags are set.  Note that "Reusable" plugs may not necessarily come from a plug set, nor from the "reusablePlugItems" in the socket's Definition data. They can sometimes be "randomized" in which case the only source of truth at the moment is still the runtime DestinyItemSocketsComponent.sockets.reusablePlugs property.
- **ProfilePlugSet**: 4
  > Use the ProfilePlugSets (DestinyProfileResponse.profilePlugSets) component data to determine which plugs are valid for this socket.
- **CharacterPlugSet**: 8
  > Use the CharacterPlugSets (DestinyProfileResponse.characterPlugSets) component data to determine which plugs are valid for this socket.

Source: [Destiny.SocketPlugSources](https://bungie-net.github.io/#/components/schemas/Destiny.SocketPlugSources)

## `ItemPerkVisibility`

Indicates how a perk should be shown, or if it should be, in the game UI. Maybe useful for those of you trying to filter out internal-use-only perks (or for those of you trying to figure out what they do!)

- **Visible**: 0
- **Disabled**: 1
- **Hidden**: 2

Source: [Destiny.ItemPerkVisibility](https://bungie-net.github.io/#/components/schemas/Destiny.ItemPerkVisibility)

## `SpecialItemType`

As you run into items that need to be classified for Milestone purposes in ways that we cannot infer via direct data, add a new classification here and use a string constant to represent it in the local item config file. NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.

- **None**: 0
- **SpecialCurrency**: 1
- **Armor**: 8
- **Weapon**: 9
- **Engram**: 23
- **Consumable**: 24
- **ExchangeMaterial**: 25
- **MissionReward**: 27
- **Currency**: 29

Source: [Destiny.SpecialItemType](https://bungie-net.github.io/#/components/schemas/Destiny.SpecialItemType)

## `DestinyItemType`

An enumeration that indicates the high-level "type" of the item, attempting to iron out the context specific differences for specific instances of an entity. For instance, though a weapon may be of various weapon "Types", in DestinyItemType they are all classified as "Weapon". This allows for better filtering on a higher level of abstraction for the concept of types.  This enum is provided for historical compatibility with Destiny 1, but an ideal alternative is to use DestinyItemCategoryDefinitions and the DestinyItemDefinition.itemCategories property instead. Item Categories allow for arbitrary hierarchies of specificity, and for items to belong to multiple categories across multiple hierarchies simultaneously. For this enum, we pick a single type as a "best guess" fit.  NOTE: This is not all of the item types available, and some of these are holdovers from Destiny 1 that may or may not still exist.  I keep updating these because they're so damn convenient. I guess I shouldn't fight it.

- **None**: 0
- **Currency**: 1
- **Armor**: 2
- **Weapon**: 3
- **Message**: 7
- **Engram**: 8
- **Consumable**: 9
- **ExchangeMaterial**: 10
- **MissionReward**: 11
- **QuestStep**: 12
- **QuestStepComplete**: 13
- **Emblem**: 14
- **Quest**: 15
- **Subclass**: 16
- **ClanBanner**: 17
- **Aura**: 18
- **Mod**: 19
- **Dummy**: 20
- **Ship**: 21
- **Vehicle**: 22
- **Emote**: 23
- **Ghost**: 24
- **Package**: 25
- **Bounty**: 26
- **Wrapper**: 27
- **SeasonalArtifact**: 28
- **Finisher**: 29
- **Pattern**: 30

Source: [Destiny.DestinyItemType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyItemType)

## `DestinyBreakerType`

A plug can optionally have a "Breaker Type": a special ability that can affect units in unique ways. Activating this plug can grant one of these types.

- **None**: 0
- **ShieldPiercing**: 1
- **Disruption**: 2
- **Stagger**: 3

Source: [Destiny.DestinyBreakerType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyBreakerType)

## `DestinyProgressionRewardItemAcquisitionBehavior`

Represents the different kinds of acquisition behavior for progression reward items.

- **Instant**: 0
- **PlayerClaimRequired**: 1

Source: [Destiny.DestinyProgressionRewardItemAcquisitionBehavior](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyProgressionRewardItemAcquisitionBehavior)

## `GroupAllianceStatus`

- **Unallied**: 0
- **Parent**: 1
- **Child**: 2

Source: [GroupsV2.GroupAllianceStatus](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupAllianceStatus)

## `GroupPotentialMemberStatus`

- **None**: 0
- **Applicant**: 1
- **Invitee**: 2

Source: [GroupsV2.GroupPotentialMemberStatus](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupPotentialMemberStatus)

## `ForumRecruitmentIntensityLabel`

- **None**: 0
- **Casual**: 1
- **Professional**: 2

Source: [Forum.ForumRecruitmentIntensityLabel](https://bungie-net.github.io/#/components/schemas/Forum.ForumRecruitmentIntensityLabel)

## `ForumRecruitmentToneLabel`

- **None**: 0
- **FamilyFriendly**: 1
- **Rowdy**: 2

Source: [Forum.ForumRecruitmentToneLabel](https://bungie-net.github.io/#/components/schemas/Forum.ForumRecruitmentToneLabel)

## `ForumPostSortEnum`

- **Default**: 0
- **OldestFirst**: 1

Source: [Forum.ForumPostSortEnum](https://bungie-net.github.io/#/components/schemas/Forum.ForumPostSortEnum)

## `GroupDateRange`

- **All**: 0
- **PastDay**: 1
- **PastWeek**: 2
- **PastMonth**: 3
- **PastYear**: 4

Source: [GroupsV2.GroupDateRange](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupDateRange)

## `GroupSortBy`

- **Name**: 0
- **Date**: 1
- **Popularity**: 2
- **Id**: 3

Source: [GroupsV2.GroupSortBy](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupSortBy)

## `GroupMemberCountFilter`

- **All**: 0
- **OneToTen**: 1
- **ElevenToOneHundred**: 2
- **GreaterThanOneHundred**: 3

Source: [GroupsV2.GroupMemberCountFilter](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupMemberCountFilter)

## `IgnoreLength`

- **None**: 0
- **Week**: 1
- **TwoWeeks**: 2
- **ThreeWeeks**: 3
- **Month**: 4
- **ThreeMonths**: 5
- **SixMonths**: 6
- **Year**: 7
- **Forever**: 8
- **ThreeMinutes**: 9
- **Hour**: 10
- **ThirtyDays**: 11

Source: [Ignores.IgnoreLength](https://bungie-net.github.io/#/components/schemas/Ignores.IgnoreLength)

## `GroupApplicationResolveState`

- **Unresolved**: 0
- **Accepted**: 1
- **Denied**: 2
- **Rescinded**: 3

Source: [GroupsV2.GroupApplicationResolveState](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupApplicationResolveState)

## `PlatformErrorCodes`

- **None**: 0
- **Success**: 1
- **TransportException**: 2
- **UnhandledException**: 3
- **NotImplemented**: 4
- **SystemDisabled**: 5
- **FailedToLoadAvailableLocalesConfiguration**: 6
- **ParameterParseFailure**: 7
- **ParameterInvalidRange**: 8
- **BadRequest**: 9
- **AuthenticationInvalid**: 10
- **DataNotFound**: 11
- **InsufficientPrivileges**: 12
- **Duplicate**: 13
- **UnknownSqlResult**: 14
  > Deprecated, please do not check for this value anywhere.
- **ValidationError**: 15
- **ValidationMissingFieldError**: 16
- **ValidationInvalidInputError**: 17
- **InvalidParameters**: 18
- **ParameterNotFound**: 19
- **UnhandledHttpException**: 20
- **NotFound**: 21
- **WebAuthModuleAsyncFailed**: 22
- **InvalidReturnValue**: 23
- **UserBanned**: 24
- **InvalidPostBody**: 25
- **MissingPostBody**: 26
- **ExternalServiceTimeout**: 27
- **ValidationLengthError**: 28
- **ValidationRangeError**: 29
- **JsonDeserializationError**: 30
- **ThrottleLimitExceeded**: 31
- **ValidationTagError**: 32
- **ValidationProfanityError**: 33
- **ValidationUrlFormatError**: 34
- **ThrottleLimitExceededMinutes**: 35
- **ThrottleLimitExceededMomentarily**: 36
- **ThrottleLimitExceededSeconds**: 37
- **ExternalServiceUnknown**: 38
- **ValidationWordLengthError**: 39
- **ValidationInvisibleUnicode**: 40
- **ValidationBadNames**: 41
- **ExternalServiceFailed**: 42
- **ServiceRetired**: 43
- **UnknownSqlException**: 44
- **UnsupportedLocale**: 45
- **InvalidPageNumber**: 46
- **MaximumPageSizeExceeded**: 47
- **ServiceUnsupported**: 48
- **ValidationMaximumUnicodeCombiningCharacters**: 49
- **ValidationMaximumSequentialCarriageReturns**: 50
- **PerEndpointRequestThrottleExceeded**: 51
- **AuthContextCacheAssertion**: 52
- **ExPlatformStringValidationError**: 53
- **PerApplicationThrottleExceeded**: 54
- **PerApplicationAnonymousThrottleExceeded**: 55
- **PerApplicationAuthenticatedThrottleExceeded**: 56
- **PerUserThrottleExceeded**: 57
- **PayloadSignatureVerificationFailure**: 58
- **InvalidServiceAuthContext**: 59
- **ObsoleteCredentialType**: 89
- **UnableToUnPairMobileApp**: 90
- **UnableToPairMobileApp**: 91
- **CannotUseMobileAuthWithNonMobileProvider**: 92
- **MissingDeviceCookie**: 93
- **FacebookTokenExpired**: 94
- **AuthTicketRequired**: 95
- **CookieContextRequired**: 96
- **UnknownAuthenticationError**: 97
- **BungieNetAccountCreationRequired**: 98
- **WebAuthRequired**: 99
- **ContentUnknownSqlResult**: 100
- **ContentNeedUniquePath**: 101
- **ContentSqlException**: 102
- **ContentNotFound**: 103
- **ContentSuccessWithTagAddFail**: 104
- **ContentSearchMissingParameters**: 105
- **ContentInvalidId**: 106
- **ContentPhysicalFileDeletionError**: 107
- **ContentPhysicalFileCreationError**: 108
- **ContentPerforceSubmissionError**: 109
- **ContentPerforceInitializationError**: 110
- **ContentDeploymentPackageNotReadyError**: 111
- **ContentUploadFailed**: 112
- **ContentTooManyResults**: 113
- **ContentInvalidState**: 115
- **ContentNavigationParentNotFound**: 116
- **ContentNavigationParentUpdateError**: 117
- **DeploymentPackageNotEditable**: 118
- **ContentValidationError**: 119
- **ContentPropertiesValidationError**: 120
- **ContentTypeNotFound**: 121
- **DeploymentPackageNotFound**: 122
- **ContentSearchInvalidParameters**: 123
- **ContentItemPropertyAggregationError**: 124
- **DeploymentPackageFileNotFound**: 125
- **ContentPerforceFileHistoryNotFound**: 126
- **ContentAssetZipCreationFailure**: 127
- **ContentAssetZipCreationBusy**: 128
- **ContentProjectNotFound**: 129
- **ContentFolderNotFound**: 130
- **ContentPackagesInconsistent**: 131
- **ContentPackagesInvalidState**: 132
- **ContentPackagesInconsistentType**: 133
- **ContentCannotDeletePackage**: 134
- **ContentLockedForChanges**: 135
- **ContentFileUploadFailed**: 136
- **ContentNotReviewed**: 137
- **ContentPermissionDenied**: 138
- **ContentInvalidExternalUrl**: 139
- **ContentExternalFileCannotBeImportedLocally**: 140
- **ContentTagSaveFailure**: 141
- **ContentPerforceUnmatchedFileError**: 142
- **ContentPerforceChangelistResultNotFound**: 143
- **ContentPerforceChangelistFileItemsNotFound**: 144
- **ContentPerforceInvalidRevisionError**: 145
- **ContentUnloadedSaveResult**: 146
- **ContentPropertyInvalidNumber**: 147
- **ContentPropertyInvalidUrl**: 148
- **ContentPropertyInvalidDate**: 149
- **ContentPropertyInvalidSet**: 150
- **ContentPropertyCannotDeserialize**: 151
- **ContentRegexValidationFailOnProperty**: 152
- **ContentMaxLengthFailOnProperty**: 153
- **ContentPropertyUnexpectedDeserializationError**: 154
- **ContentPropertyRequired**: 155
- **ContentCannotCreateFile**: 156
- **ContentInvalidMigrationFile**: 157
- **ContentMigrationAlteringProcessedItem**: 158
- **ContentPropertyDefinitionNotFound**: 159
- **ContentReviewDataChanged**: 160
- **ContentRollbackRevisionNotInPackage**: 161
- **ContentItemNotBasedOnLatestRevision**: 162
- **ContentUnauthorized**: 163
- **ContentCannotCreateDeploymentPackage**: 164
- **ContentUserNotFound**: 165
- **ContentLocalePermissionDenied**: 166
- **ContentInvalidLinkToInternalEnvironment**: 167
- **ContentInvalidBlacklistedContent**: 168
- **ContentMacroMalformedNoContentId**: 169
- **ContentMacroMalformedNoTemplateType**: 170
- **ContentIllegalBNetMembershipId**: 171
- **ContentLocaleDidNotMatchExpected**: 172
- **ContentBabelCallFailed**: 173
- **ContentEnglishPostLiveForbidden**: 174
- **ContentLocaleEditPermissionDenied**: 175
- **ContentStackUnknownError**: 176
- **ContentStackNotFound**: 177
- **ContentStackRateLimited**: 178
- **ContentStackTimeout**: 179
- **ContentStackServiceError**: 180
- **ContentStackDeserializationFailure**: 181
- **UserNonUniqueName**: 200
- **UserManualLinkingStepRequired**: 201
- **UserCreateUnknownSqlResult**: 202
- **UserCreateUnknownSqlException**: 203
- **UserMalformedMembershipId**: 204
- **UserCannotFindRequestedUser**: 205
- **UserCannotLoadAccountCredentialLinkInfo**: 206
- **UserInvalidMobileAppType**: 207
- **UserMissingMobilePairingInfo**: 208
- **UserCannotGenerateMobileKeyWhileUsingMobileCredential**: 209
- **UserGenerateMobileKeyExistingSlotCollision**: 210
- **UserDisplayNameMissingOrInvalid**: 211
- **UserCannotLoadAccountProfileData**: 212
- **UserCannotSaveUserProfileData**: 213
- **UserEmailMissingOrInvalid**: 214
- **UserTermsOfUseRequired**: 215
- **UserCannotCreateNewAccountWhileLoggedIn**: 216
- **UserCannotResolveCentralAccount**: 217
- **UserInvalidAvatar**: 218
- **UserMissingCreatedUserResult**: 219
- **UserCannotChangeUniqueNameYet**: 220
- **UserCannotChangeDisplayNameYet**: 221
- **UserCannotChangeEmail**: 222
- **UserUniqueNameMustStartWithLetter**: 223
- **UserNoLinkedAccountsSupportFriendListings**: 224
- **UserAcknowledgmentTableFull**: 225
- **UserCreationDestinyMembershipRequired**: 226
- **UserFriendsTokenNeedsRefresh**: 227
- **UserEmailValidationUnknown**: 228
- **UserEmailValidationLimit**: 229
- **TransactionEmailSendFailure**: 230
- **MailHookPermissionFailure**: 231
- **MailServiceRateLimit**: 232
- **UserEmailMustBeVerified**: 233
- **UserMustAllowCustomerServiceEmails**: 234
- **NonTransactionalEmailSendFailure**: 235
- **UnknownErrorSettingGlobalDisplayName**: 236
- **DuplicateGlobalDisplayName**: 237
- **ErrorRunningNameValidationChecks**: 238
- **ErrorDatabaseGlobalName**: 239
- **ErrorNoAvailableNameChanges**: 240
- **ErrorNameAlreadySetToInput**: 241
- **MessagingUnknownError**: 300
- **MessagingSelfError**: 301
- **MessagingSendThrottle**: 302
- **MessagingNoBody**: 303
- **MessagingTooManyUsers**: 304
- **MessagingCanNotLeaveConversation**: 305
- **MessagingUnableToSend**: 306
- **MessagingDeletedUserForbidden**: 307
- **MessagingCannotDeleteExternalConversation**: 308
- **MessagingGroupChatDisabled**: 309
- **MessagingMustIncludeSelfInPrivateMessage**: 310
- **MessagingSenderIsBanned**: 311
- **MessagingGroupOptionalChatExceededMaximum**: 312
- **PrivateMessagingRequiresDestinyMembership**: 313
- **AddSurveyAnswersUnknownSqlException**: 400
- **ForumBodyCannotBeEmpty**: 500
- **ForumSubjectCannotBeEmptyOnTopicPost**: 501
- **ForumCannotLocateParentPost**: 502
- **ForumThreadLockedForReplies**: 503
- **ForumUnknownSqlResultDuringCreatePost**: 504
- **ForumUnknownTagCreationError**: 505
- **ForumUnknownSqlResultDuringTagItem**: 506
- **ForumUnknownExceptionCreatePost**: 507
- **ForumQuestionMustBeTopicPost**: 508
- **ForumExceptionDuringTagSearch**: 509
- **ForumExceptionDuringTopicRetrieval**: 510
- **ForumAliasedTagError**: 511
- **ForumCannotLocateThread**: 512
- **ForumUnknownExceptionEditPost**: 513
- **ForumCannotLocatePost**: 514
- **ForumUnknownExceptionGetOrCreateTags**: 515
- **ForumEditPermissionDenied**: 516
- **ForumUnknownSqlResultDuringTagIdRetrieval**: 517
- **ForumCannotGetRating**: 518
- **ForumUnknownExceptionGetRating**: 519
- **ForumRatingsAccessError**: 520
- **ForumRelatedPostAccessError**: 521
- **ForumLatestReplyAccessError**: 522
- **ForumUserStatusAccessError**: 523
- **ForumAuthorAccessError**: 524
- **ForumGroupAccessError**: 525
- **ForumUrlExpectedButMissing**: 526
- **ForumRepliesCannotBeEmpty**: 527
- **ForumRepliesCannotBeInDifferentGroups**: 528
- **ForumSubTopicCannotBeCreatedAtThisThreadLevel**: 529
- **ForumCannotCreateContentTopic**: 530
- **ForumTopicDoesNotExist**: 531
- **ForumContentCommentsNotAllowed**: 532
- **ForumUnknownSqlResultDuringEditPost**: 533
- **ForumUnknownSqlResultDuringGetPost**: 534
- **ForumPostValidationBadUrl**: 535
- **ForumBodyTooLong**: 536
- **ForumSubjectTooLong**: 537
- **ForumAnnouncementNotAllowed**: 538
- **ForumCannotShareOwnPost**: 539
- **ForumEditNoOp**: 540
- **ForumUnknownDatabaseErrorDuringGetPost**: 541
- **ForumExceeedMaximumRowLimit**: 542
- **ForumCannotSharePrivatePost**: 543
- **ForumCannotCrossPostBetweenGroups**: 544
- **ForumIncompatibleCategories**: 555
- **ForumCannotUseTheseCategoriesOnNonTopicPost**: 556
- **ForumCanOnlyDeleteTopics**: 557
- **ForumDeleteSqlException**: 558
- **ForumDeleteSqlUnknownResult**: 559
- **ForumTooManyTags**: 560
- **ForumCanOnlyRateTopics**: 561
- **ForumBannedPostsCannotBeEdited**: 562
- **ForumThreadRootIsBanned**: 563
- **ForumCannotUseOfficialTagCategoryAsTag**: 564
- **ForumAnswerCannotBeMadeOnCreatePost**: 565
- **ForumAnswerCannotBeMadeOnEditPost**: 566
- **ForumAnswerPostIdIsNotADirectReplyOfQuestion**: 567
- **ForumAnswerTopicIdIsNotAQuestion**: 568
- **ForumUnknownExceptionDuringMarkAnswer**: 569
- **ForumUnknownSqlResultDuringMarkAnswer**: 570
- **ForumCannotRateYourOwnPosts**: 571
- **ForumPollsMustBeTheFirstPostInTopic**: 572
- **ForumInvalidPollInput**: 573
- **ForumGroupAdminEditNonMember**: 574
- **ForumCannotEditModeratorEditedPost**: 575
- **ForumRequiresDestinyMembership**: 576
- **ForumUnexpectedError**: 577
- **ForumAgeLock**: 578
- **ForumMaxPages**: 579
- **ForumMaxPagesOldestFirst**: 580
- **ForumCannotApplyForumIdWithoutTags**: 581
- **ForumCannotApplyForumIdToNonTopics**: 582
- **ForumCannotDownvoteCommunityCreations**: 583
- **ForumTopicsMustHaveOfficialCategory**: 584
- **ForumRecruitmentTopicMalformed**: 585
- **ForumRecruitmentTopicNotFound**: 586
- **ForumRecruitmentTopicNoSlotsRemaining**: 587
- **ForumRecruitmentTopicKickBan**: 588
- **ForumRecruitmentTopicRequirementsNotMet**: 589
- **ForumRecruitmentTopicNoPlayers**: 590
- **ForumRecruitmentApproveFailMessageBan**: 591
- **ForumRecruitmentGlobalBan**: 592
- **ForumUserBannedFromThisTopic**: 593
- **ForumRecruitmentFireteamMembersOnly**: 594
- **ForumRequiresDestiny2Progress**: 595
- **ForumRequiresDestiny2EntitlementPurchase**: 596
- **GroupMembershipApplicationAlreadyResolved**: 601
- **GroupMembershipAlreadyApplied**: 602
- **GroupMembershipInsufficientPrivileges**: 603
- **GroupIdNotReturnedFromCreation**: 604
- **GroupSearchInvalidParameters**: 605
- **GroupMembershipPendingApplicationNotFound**: 606
- **GroupInvalidId**: 607
- **GroupInvalidMembershipId**: 608
- **GroupInvalidMembershipType**: 609
- **GroupMissingTags**: 610
- **GroupMembershipNotFound**: 611
- **GroupInvalidRating**: 612
- **GroupUserFollowingAccessError**: 613
- **GroupUserMembershipAccessError**: 614
- **GroupCreatorAccessError**: 615
- **GroupAdminAccessError**: 616
- **GroupPrivatePostNotViewable**: 617
- **GroupMembershipNotLoggedIn**: 618
- **GroupNotDeleted**: 619
- **GroupUnknownErrorUndeletingGroup**: 620
- **GroupDeleted**: 621
- **GroupNotFound**: 622
- **GroupMemberBanned**: 623
- **GroupMembershipClosed**: 624
- **GroupPrivatePostOverrideError**: 625
- **GroupNameTaken**: 626
- **GroupDeletionGracePeriodExpired**: 627
- **GroupCannotCheckBanStatus**: 628
- **GroupMaximumMembershipCountReached**: 629
- **NoDestinyAccountForClanPlatform**: 630
- **AlreadyRequestingMembershipForClanPlatform**: 631
- **AlreadyClanMemberOnPlatform**: 632
- **GroupJoinedCannotSetClanName**: 633
- **GroupLeftCannotClearClanName**: 634
- **GroupRelationshipRequestPending**: 635
- **GroupRelationshipRequestBlocked**: 636
- **GroupRelationshipRequestNotFound**: 637
- **GroupRelationshipBlockNotFound**: 638
- **GroupRelationshipNotFound**: 639
- **GroupAlreadyAllied**: 641
- **GroupAlreadyMember**: 642
- **GroupRelationshipAlreadyExists**: 643
- **InvalidGroupTypesForRelationshipRequest**: 644
- **GroupAtMaximumAlliances**: 646
- **GroupCannotSetClanOnlySettings**: 647
- **ClanCannotSetTwoDefaultPostTypes**: 648
- **GroupMemberInvalidMemberType**: 649
- **GroupInvalidPlatformType**: 650
- **GroupMemberInvalidSort**: 651
- **GroupInvalidResolveState**: 652
- **ClanAlreadyEnabledForPlatform**: 653
- **ClanNotEnabledForPlatform**: 654
- **ClanEnabledButCouldNotJoinNoAccount**: 655
- **ClanEnabledButCouldNotJoinAlreadyMember**: 656
- **ClanCannotJoinNoCredential**: 657
- **NoClanMembershipForPlatform**: 658
- **GroupToGroupFollowLimitReached**: 659
- **ChildGroupAlreadyInAlliance**: 660
- **OwnerGroupAlreadyInAlliance**: 661
- **AllianceOwnerCannotJoinAlliance**: 662
- **GroupNotInAlliance**: 663
- **ChildGroupCannotInviteToAlliance**: 664
- **GroupToGroupAlreadyFollowed**: 665
- **GroupToGroupNotFollowing**: 666
- **ClanMaximumMembershipReached**: 667
- **ClanNameNotValid**: 668
- **ClanNameNotValidError**: 669
- **AllianceOwnerNotDefined**: 670
- **AllianceChildNotDefined**: 671
- **ClanCultureIllegalCharacters**: 672
- **ClanTagIllegalCharacters**: 673
- **ClanRequiresInvitation**: 674
- **ClanMembershipClosed**: 675
- **ClanInviteAlreadyMember**: 676
- **GroupInviteAlreadyMember**: 677
- **GroupJoinApprovalRequired**: 678
- **ClanTagRequired**: 679
- **GroupNameCannotStartOrEndWithWhiteSpace**: 680
- **ClanCallsignCannotStartOrEndWithWhiteSpace**: 681
- **ClanMigrationFailed**: 682
- **ClanNotEnabledAlreadyMemberOfAnotherClan**: 683
- **GroupModerationNotPermittedOnNonMembers**: 684
- **ClanCreationInWorldServerFailed**: 685
- **ClanNotFound**: 686
- **ClanMembershipLevelDoesNotPermitThatAction**: 687
- **ClanMemberNotFound**: 688
- **ClanMissingMembershipApprovers**: 689
- **ClanInWrongStateForRequestedAction**: 690
- **ClanNameAlreadyUsed**: 691
- **ClanTooFewMembers**: 692
- **ClanInfoCannotBeWhitespace**: 693
- **GroupCultureThrottle**: 694
- **ClanTargetDisallowsInvites**: 695
- **ClanInvalidOperation**: 696
- **ClanFounderCannotLeaveWithoutAbdication**: 697
- **ClanNameReserved**: 698
- **ClanApplicantInClanSoNowInvited**: 699
- **ActivitiesUnknownException**: 701
- **ActivitiesParameterNull**: 702
- **ActivityCountsDiabled**: 703
- **ActivitySearchInvalidParameters**: 704
- **ActivityPermissionDenied**: 705
- **ShareAlreadyShared**: 706
- **ActivityLoggingDisabled**: 707
- **ClanRequiresExistingDestinyAccount**: 750
- **ClanNameRestricted**: 751
- **ClanCreationBan**: 752
- **ClanCreationTenureRequirementsNotMet**: 753
- **ItemAlreadyFollowed**: 801
- **ItemNotFollowed**: 802
- **CannotFollowSelf**: 803
- **GroupFollowLimitExceeded**: 804
- **TagFollowLimitExceeded**: 805
- **UserFollowLimitExceeded**: 806
- **FollowUnsupportedEntityType**: 807
- **NoValidTagsInList**: 900
- **BelowMinimumSuggestionLength**: 901
- **CannotGetSuggestionsOnMultipleTagsSimultaneously**: 902
- **NotAValidPartialTag**: 903
- **TagSuggestionsUnknownSqlResult**: 904
- **TagsUnableToLoadPopularTagsFromDatabase**: 905
- **TagInvalid**: 906
- **TagNotFound**: 907
- **SingleTagExpected**: 908
- **TagsExceededMaximumPerItem**: 909
- **IgnoreInvalidParameters**: 1000
- **IgnoreSqlException**: 1001
- **IgnoreErrorRetrievingGroupPermissions**: 1002
- **IgnoreErrorInsufficientPermission**: 1003
- **IgnoreErrorRetrievingItem**: 1004
- **IgnoreCannotIgnoreSelf**: 1005
- **IgnoreIllegalType**: 1006
- **IgnoreNotFound**: 1007
- **IgnoreUserGloballyIgnored**: 1008
- **IgnoreUserIgnored**: 1009
- **TargetUserIgnored**: 1010
- **NotificationSettingInvalid**: 1100
- **PsnApiExpiredAccessToken**: 1204
- **PSNExForbidden**: 1205
- **PSNExSystemDisabled**: 1218
- **PsnApiErrorCodeUnknown**: 1223
- **PsnApiErrorWebException**: 1224
- **PsnApiBadRequest**: 1225
- **PsnApiAccessTokenRequired**: 1226
- **PsnApiInvalidAccessToken**: 1227
- **PsnApiBannedUser**: 1229
- **PsnApiAccountUpgradeRequired**: 1230
- **PsnApiServiceTemporarilyUnavailable**: 1231
- **PsnApiServerBusy**: 1232
- **PsnApiUnderMaintenance**: 1233
- **PsnApiProfileUserNotFound**: 1234
- **PsnApiProfilePrivacyRestriction**: 1235
- **PsnApiProfileUnderMaintenance**: 1236
- **PsnApiAccountAttributeMissing**: 1237
- **PsnApiNoPermission**: 1238
- **PsnApiTargetUserBlocked**: 1239
- **PsnApiJwksMissing**: 1240
- **PsnApiJwtMalformedHeader**: 1241
- **PsnApiJwtMalformedPayload**: 1242
- **XblExSystemDisabled**: 1300
- **XblExUnknownError**: 1301
- **XblApiErrorWebException**: 1302
- **XblStsTokenInvalid**: 1303
- **XblStsMissingToken**: 1304
- **XblStsExpiredToken**: 1305
- **XblAccessToTheSandboxDenied**: 1306
- **XblMsaResponseMissing**: 1307
- **XblMsaAccessTokenExpired**: 1308
- **XblMsaInvalidRequest**: 1309
- **XblMsaFriendsRequireSignIn**: 1310
- **XblUserActionRequired**: 1311
- **XblParentalControls**: 1312
- **XblDeveloperAccount**: 1313
- **XblUserTokenExpired**: 1314
- **XblUserTokenInvalid**: 1315
- **XblOffline**: 1316
- **XblUnknownErrorCode**: 1317
- **XblMsaInvalidGrant**: 1318
- **ReportNotYetResolved**: 1400
- **ReportOverturnDoesNotChangeDecision**: 1401
- **ReportNotFound**: 1402
- **ReportAlreadyReported**: 1403
- **ReportInvalidResolution**: 1404
- **ReportNotAssignedToYou**: 1405
- **LegacyGameStatsSystemDisabled**: 1500
- **LegacyGameStatsUnknownError**: 1501
- **LegacyGameStatsMalformedSneakerNetCode**: 1502
- **DestinyAccountAcquisitionFailure**: 1600
- **DestinyAccountNotFound**: 1601
- **DestinyBuildStatsDatabaseError**: 1602
- **DestinyCharacterStatsDatabaseError**: 1603
- **DestinyPvPStatsDatabaseError**: 1604
- **DestinyPvEStatsDatabaseError**: 1605
- **DestinyGrimoireStatsDatabaseError**: 1606
- **DestinyStatsParameterMembershipTypeParseError**: 1607
- **DestinyStatsParameterMembershipIdParseError**: 1608
- **DestinyStatsParameterRangeParseError**: 1609
- **DestinyStringItemHashNotFound**: 1610
- **DestinyStringSetNotFound**: 1611
- **DestinyContentLookupNotFoundForKey**: 1612
- **DestinyContentItemNotFound**: 1613
- **DestinyContentSectionNotFound**: 1614
- **DestinyContentPropertyNotFound**: 1615
- **DestinyContentConfigNotFound**: 1616
- **DestinyContentPropertyBucketValueNotFound**: 1617
- **DestinyUnexpectedError**: 1618
- **DestinyInvalidAction**: 1619
- **DestinyCharacterNotFound**: 1620
- **DestinyInvalidFlag**: 1621
- **DestinyInvalidRequest**: 1622
- **DestinyItemNotFound**: 1623
- **DestinyInvalidCustomizationChoices**: 1624
- **DestinyVendorItemNotFound**: 1625
- **DestinyInternalError**: 1626
- **DestinyVendorNotFound**: 1627
- **DestinyRecentActivitiesDatabaseError**: 1628
- **DestinyItemBucketNotFound**: 1629
- **DestinyInvalidMembershipType**: 1630
- **DestinyVersionIncompatibility**: 1631
- **DestinyItemAlreadyInInventory**: 1632
- **DestinyBucketNotFound**: 1633
- **DestinyCharacterNotInTower**: 1634
  > Note: This is one of those holdovers from Destiny 1. We didn't change the enum because I am lazy, but in Destiny 2 this would read "DestinyCharacterNotInSocialSpace"
- **DestinyCharacterNotLoggedIn**: 1635
- **DestinyDefinitionsNotLoaded**: 1636
- **DestinyInventoryFull**: 1637
- **DestinyItemFailedLevelCheck**: 1638
- **DestinyItemFailedUnlockCheck**: 1639
- **DestinyItemUnequippable**: 1640
- **DestinyItemUniqueEquipRestricted**: 1641
- **DestinyNoRoomInDestination**: 1642
- **DestinyServiceFailure**: 1643
- **DestinyServiceRetired**: 1644
- **DestinyTransferFailed**: 1645
- **DestinyTransferNotFoundForSourceBucket**: 1646
- **DestinyUnexpectedResultInVendorTransferCheck**: 1647
- **DestinyUniquenessViolation**: 1648
- **DestinyErrorDeserializationFailure**: 1649
- **DestinyValidAccountTicketRequired**: 1650
- **DestinyShardRelayClientTimeout**: 1651
- **DestinyShardRelayProxyTimeout**: 1652
- **DestinyPGCRNotFound**: 1653
- **DestinyAccountMustBeOffline**: 1654
- **DestinyCanOnlyEquipInGame**: 1655
- **DestinyCannotPerformActionOnEquippedItem**: 1656
- **DestinyQuestAlreadyCompleted**: 1657
- **DestinyQuestAlreadyTracked**: 1658
- **DestinyTrackableQuestsFull**: 1659
- **DestinyItemNotTransferrable**: 1660
- **DestinyVendorPurchaseNotAllowed**: 1661
- **DestinyContentVersionMismatch**: 1662
- **DestinyItemActionForbidden**: 1663
- **DestinyRefundInvalid**: 1664
- **DestinyPrivacyRestriction**: 1665
- **DestinyActionInsufficientPrivileges**: 1666
- **DestinyInvalidClaimException**: 1667
- **DestinyLegacyPlatformRestricted**: 1668
- **DestinyLegacyPlatformInUse**: 1669
- **DestinyLegacyPlatformInaccessible**: 1670
- **DestinyCannotPerformActionAtThisLocation**: 1671
- **DestinyThrottledByGameServer**: 1672
- **DestinyItemNotTransferrableHasSideEffects**: 1673
- **DestinyItemLocked**: 1674
- **DestinyCannotAffordMaterialRequirements**: 1675
- **DestinyFailedPlugInsertionRules**: 1676
- **DestinySocketNotFound**: 1677
- **DestinySocketActionNotAllowed**: 1678
- **DestinySocketAlreadyHasPlug**: 1679
- **DestinyPlugItemNotAvailable**: 1680
- **DestinyCharacterLoggedInNotAllowed**: 1681
- **DestinyPublicAccountNotAccessible**: 1682
- **DestinyClaimsItemAlreadyClaimed**: 1683
- **DestinyClaimsNoInventorySpace**: 1684
- **DestinyClaimsRequiredLevelNotMet**: 1685
- **DestinyClaimsInvalidState**: 1686
- **DestinyNotEnoughRoomForMultipleRewards**: 1687
- **DestinyDirectBabelClientTimeout**: 1688
- **FbInvalidRequest**: 1800
- **FbRedirectMismatch**: 1801
- **FbAccessDenied**: 1802
- **FbUnsupportedResponseType**: 1803
- **FbInvalidScope**: 1804
- **FbUnsupportedGrantType**: 1805
- **FbInvalidGrant**: 1806
- **InvitationExpired**: 1900
- **InvitationUnknownType**: 1901
- **InvitationInvalidResponseStatus**: 1902
- **InvitationInvalidType**: 1903
- **InvitationAlreadyPending**: 1904
- **InvitationInsufficientPermission**: 1905
- **InvitationInvalidCode**: 1906
- **InvitationInvalidTargetState**: 1907
- **InvitationCannotBeReactivated**: 1908
- **InvitationNoRecipients**: 1910
- **InvitationGroupCannotSendToSelf**: 1911
- **InvitationTooManyRecipients**: 1912
- **InvitationInvalid**: 1913
- **InvitationNotFound**: 1914
- **TokenInvalid**: 2000
- **TokenBadFormat**: 2001
- **TokenAlreadyClaimed**: 2002
- **TokenAlreadyClaimedSelf**: 2003
- **TokenThrottling**: 2004
- **TokenUnknownRedemptionFailure**: 2005
- **TokenPurchaseClaimFailedAfterTokenClaimed**: 2006
- **TokenUserAlreadyOwnsOffer**: 2007
- **TokenInvalidOfferKey**: 2008
- **TokenEmailNotValidated**: 2009
- **TokenProvisioningBadVendorOrOffer**: 2010
- **TokenPurchaseHistoryUnknownError**: 2011
- **TokenThrottleStateUnknownError**: 2012
- **TokenUserAgeNotVerified**: 2013
- **TokenExceededOfferMaximum**: 2014
- **TokenNoAvailableUnlocks**: 2015
- **TokenMarketplaceInvalidPlatform**: 2016
- **TokenNoMarketplaceCodesFound**: 2017
- **TokenOfferNotAvailableForRedemption**: 2018
- **TokenUnlockPartialFailure**: 2019
- **TokenMarketplaceInvalidRegion**: 2020
- **TokenOfferExpired**: 2021
- **RAFExceededMaximumReferrals**: 2022
- **RAFDuplicateBond**: 2023
- **RAFNoValidVeteranDestinyMembershipsFound**: 2024
- **RAFNotAValidVeteranUser**: 2025
- **RAFCodeAlreadyClaimedOrNotFound**: 2026
- **RAFMismatchedDestinyMembershipType**: 2027
- **RAFUnableToAccessPurchaseHistory**: 2028
- **RAFUnableToCreateBond**: 2029
- **RAFUnableToFindBond**: 2030
- **RAFUnableToRemoveBond**: 2031
- **RAFCannotBondToSelf**: 2032
- **RAFInvalidPlatform**: 2033
- **RAFGenerateThrottled**: 2034
- **RAFUnableToCreateBondVersionMismatch**: 2035
- **RAFUnableToRemoveBondVersionMismatch**: 2036
- **RAFRedeemThrottled**: 2037
- **NoAvailableDiscountCode**: 2038
- **DiscountAlreadyClaimed**: 2039
- **DiscountClaimFailure**: 2040
- **DiscountConfigurationFailure**: 2041
- **DiscountGenerationFailure**: 2042
- **DiscountAlreadyExists**: 2043
- **TokenRequiresCredentialXuid**: 2044
- **TokenRequiresCredentialPsnid**: 2045
- **OfferRequired**: 2046
- **UnknownEververseHistoryError**: 2047
- **MissingEververseHistoryError**: 2048
- **BungieRewardEmailStateInvalid**: 2049
- **BungieRewardNotYetClaimable**: 2050
- **MissingOfferConfig**: 2051
- **RAFQuestEntitlementRequiresBnet**: 2052
- **RAFQuestEntitlementTransportFailure**: 2053
- **RAFQuestEntitlementUnknownFailure**: 2054
- **RAFVeteranRewardUnknownFailure**: 2055
- **RAFTooEarlyToCancelBond**: 2056
- **LoyaltyRewardAlreadyRedeemed**: 2057
- **UnclaimedLoyaltyRewardEntryNotFound**: 2058
- **PartnerOfferPartialFailure**: 2059
- **PartnerOfferAlreadyClaimed**: 2060
- **PartnerOfferSkuNotFound**: 2061
- **PartnerOfferSkuExpired**: 2062
- **PartnerOfferPermissionFailure**: 2063
- **PartnerOfferNoDestinyAccount**: 2064
- **PartnerOfferApplyDataNotFound**: 2065
- **ApiExceededMaxKeys**: 2100
- **ApiInvalidOrExpiredKey**: 2101
- **ApiKeyMissingFromRequest**: 2102
- **ApplicationDisabled**: 2103
- **ApplicationExceededMax**: 2104
- **ApplicationDisallowedByScope**: 2105
- **AuthorizationCodeInvalid**: 2106
- **OriginHeaderDoesNotMatchKey**: 2107
- **AccessNotPermittedByApplicationScope**: 2108
- **ApplicationNameIsTaken**: 2109
- **RefreshTokenNotYetValid**: 2110
- **AccessTokenHasExpired**: 2111
- **ApplicationTokenFormatNotValid**: 2112
- **ApplicationNotConfiguredForBungieAuth**: 2113
- **ApplicationNotConfiguredForOAuth**: 2114
- **OAuthAccessTokenExpired**: 2115
- **ApplicationTokenKeyIdDoesNotExist**: 2116
- **ProvidedTokenNotValidRefreshToken**: 2117
- **RefreshTokenExpired**: 2118
- **AuthorizationRecordInvalid**: 2119
- **TokenPreviouslyRevoked**: 2120
- **TokenInvalidMembership**: 2121
- **AuthorizationCodeStale**: 2122
- **AuthorizationRecordExpired**: 2123
- **AuthorizationRecordRevoked**: 2124
- **AuthorizationRecordInactiveApiKey**: 2125
- **AuthorizationRecordApiKeyMatching**: 2126
- **PartnershipInvalidType**: 2200
- **PartnershipValidationError**: 2201
- **PartnershipValidationTimeout**: 2202
- **PartnershipAccessFailure**: 2203
- **PartnershipAccountInvalid**: 2204
- **PartnershipGetAccountInfoFailure**: 2205
- **PartnershipDisabled**: 2206
- **PartnershipAlreadyExists**: 2207
- **CommunityStreamingUnavailable**: 2300
- **TwitchNotLinked**: 2500
- **TwitchAccountNotFound**: 2501
- **TwitchCouldNotLoadDestinyInfo**: 2502
- **TwitchCouldNotRegisterUser**: 2503
- **TwitchCouldNotUnregisterUser**: 2504
- **TwitchRequiresRelinking**: 2505
- **TwitchNoPlatformChosen**: 2506
- **TwitchDropHistoryPermissionFailure**: 2507
- **TwitchDropsRepairPartialFailure**: 2508
- **TrendingCategoryNotFound**: 2600
- **TrendingEntryTypeNotSupported**: 2601
- **ReportOffenderNotInPgcr**: 2700
- **ReportRequestorNotInPgcr**: 2701
- **ReportSubmissionFailed**: 2702
- **ReportCannotReportSelf**: 2703
- **AwaTypeDisabled**: 2800
- **AwaTooManyPendingRequests**: 2801
- **AwaTheFeatureRequiresARegisteredDevice**: 2802
- **AwaRequestWasUnansweredForTooLong**: 2803
- **AwaWriteRequestMissingOrInvalidToken**: 2804
- **AwaWriteRequestTokenExpired**: 2805
- **AwaWriteRequestTokenUsageLimitReached**: 2806
- **SteamWebApiError**: 2900
- **SteamWebNullResponseError**: 2901
- **SteamAccountRequired**: 2902
- **SteamNotAuthorized**: 2903
- **ClanFireteamNotFound**: 3000
- **ClanFireteamAddNoAlternatesForImmediate**: 3001
- **ClanFireteamFull**: 3002
- **ClanFireteamAltFull**: 3003
- **ClanFireteamBlocked**: 3004
- **ClanFireteamPlayerEntryNotFound**: 3005
- **ClanFireteamPermissions**: 3006
- **ClanFireteamInvalidPlatform**: 3007
- **ClanFireteamCannotAdjustSlotCount**: 3008
- **ClanFireteamInvalidPlayerPlatform**: 3009
- **ClanFireteamNotReadyForInvitesNotEnoughPlayers**: 3010
- **ClanFireteamGameInvitesNotSupportForPlatform**: 3011
- **ClanFireteamPlatformInvitePreqFailure**: 3012
- **ClanFireteamInvalidAuthContext**: 3013
- **ClanFireteamInvalidAuthProviderPsn**: 3014
- **ClanFireteamPs4SessionFull**: 3015
- **ClanFireteamInvalidAuthToken**: 3016
- **ClanFireteamScheduledFireteamsDisabled**: 3017
- **ClanFireteamNotReadyForInvitesNotScheduledYet**: 3018
- **ClanFireteamNotReadyForInvitesClosed**: 3019
- **ClanFireteamScheduledFireteamsRequireAdminPermissions**: 3020
- **ClanFireteamNonPublicMustHaveClan**: 3021
- **ClanFireteamPublicCreationRestriction**: 3022
- **ClanFireteamAlreadyJoined**: 3023
- **ClanFireteamScheduledFireteamsRange**: 3024
- **ClanFireteamPublicCreationRestrictionExtended**: 3025
- **ClanFireteamExpired**: 3026
- **ClanFireteamInvalidAuthProvider**: 3027
- **ClanFireteamInvalidAuthProviderXuid**: 3028
- **ClanFireteamThrottle**: 3029
- **ClanFireteamTooManyOpenScheduledFireteams**: 3030
- **ClanFireteamCannotReopenScheduledFireteams**: 3031
- **ClanFireteamJoinNoAccountSpecified**: 3032
- **ClanFireteamMinDestiny2ProgressForCreation**: 3033
- **ClanFireteamMinDestiny2ProgressForJoin**: 3034
- **ClanFireteamSMSOrPurchaseRequiredCreate**: 3035
- **ClanFireteamPurchaseRequiredCreate**: 3036
- **ClanFireteamSMSOrPurchaseRequiredJoin**: 3037
- **ClanFireteamPurchaseRequiredJoin**: 3038
- **CrossSaveOverriddenAccountNotFound**: 3200
- **CrossSaveTooManyOverriddenPlatforms**: 3201
- **CrossSaveNoOverriddenPlatforms**: 3202
- **CrossSavePrimaryAccountNotFound**: 3203
- **CrossSaveRequestInvalid**: 3204
- **CrossSaveBungieAccountValidationFailure**: 3206
- **CrossSaveOverriddenPlatformNotAllowed**: 3207
- **CrossSaveThresholdExceeded**: 3208
- **CrossSaveIncompatibleMembershipType**: 3209
- **CrossSaveCouldNotFindLinkedAccountForMembershipType**: 3210
- **CrossSaveCouldNotCreateDestinyProfileForMembershipType**: 3211
- **CrossSaveErrorCreatingDestinyProfileForMembershipType**: 3212
- **CrossSaveCannotOverrideSelf**: 3213
- **CrossSaveRecentSilverPurchase**: 3214
- **CrossSaveSilverBalanceNegative**: 3215
- **CrossSaveAccountNotAuthenticated**: 3216
- **ErrorOneAccountAlreadyActive**: 3217
- **ErrorOneAccountDestinyRestriction**: 3218
- **CrossSaveMustMigrateToSteam**: 3219
- **CrossSaveSteamAlreadyPaired**: 3220
- **CrossSaveCannotPairJustSteamAndBlizzard**: 3221
- **CrossSaveCannotPairSteamAloneBeforeShadowkeep**: 3222
- **AuthVerificationNotLinkedToAccount**: 3300
- **PCMigrationMissingBlizzard**: 3400
- **PCMigrationMissingSteam**: 3401
- **PCMigrationInvalidBlizzard**: 3402
- **PCMigrationInvalidSteam**: 3403
- **PCMigrationUnknownFailure**: 3404
- **PCMigrationUnknownException**: 3405
- **PCMigrationNotLinked**: 3406
- **PCMigrationAccountsAlreadyUsed**: 3407
- **PCMigrationStepFailed**: 3408
- **PCMigrationInvalidBlizzardCrossSaveState**: 3409
- **PCMigrationDestinationBanned**: 3410
- **PCMigrationDestinyFailure**: 3411
- **PCMigrationSilverTransferFailed**: 3412
- **PCMigrationEntitlementTransferFailed**: 3413
- **PCMigrationCannotStompClanFounder**: 3414
- **UnsupportedBrowser**: 3500
- **StadiaAccountRequired**: 3600
- **ErrorPhoneValidationTooManyUses**: 3702
- **ErrorPhoneValidationNoAssociatedPhone**: 3703
- **ErrorPhoneValidationCodeInvalid**: 3705
- **ErrorPhoneValidationBanned**: 3706
- **ErrorPhoneValidationCodeTooRecentlySent**: 3707
- **ErrorPhoneValidationCodeExpired**: 3708
- **ErrorPhoneValidationInvalidNumberType**: 3709
- **ErrorPhoneValidationCodeTooRecentlyChecked**: 3710
- **ApplePushErrorUnknown**: 3800
- **ApplePushErrorNull**: 3801
- **ApplePushErrorTimeout**: 3802
- **ApplePushBadRequest**: 3803
- **ApplePushFailedAuth**: 3804
- **ApplePushThrottled**: 3805
- **ApplePushServiceUnavailable**: 3806
- **NotAnImageOrVideo**: 3807
- **ErrorBungieFriendsBlockFailed**: 3900
- **ErrorBungieFriendsAutoReject**: 3901
- **ErrorBungieFriendsNoRequestFound**: 3902
- **ErrorBungieFriendsAlreadyFriends**: 3903
- **ErrorBungieFriendsUnableToRemoveRequest**: 3904
- **ErrorBungieFriendsUnableToRemove**: 3905
- **ErrorBungieFriendsIdenticalSourceTarget**: 3906
- **ErrorBungieFriendsSelf**: 3907
- **ErrorBungieBlockSelf**: 3908
- **ErrorBungieFriendsListFull**: 3910
- **ErrorBungieBlockListFull**: 3911
- **ErrorEgsUnknown**: 4000
- **ErrorEgsBadRequest**: 4001
- **ErrorEgsNotAuthorized**: 4002
- **ErrorEgsForbidden**: 4003
- **ErrorEgsAccountNotFound**: 4004
- **ErrorEgsWebException**: 4005
- **ErrorEgsUnavailable**: 4006
- **ErrorEgsJwksMissing**: 4007
- **ErrorEgsJwtMalformedHeader**: 4008
- **ErrorEgsJwtMalformedPayload**: 4009

Source: [Exceptions.PlatformErrorCodes](https://bungie-net.github.io/#/components/schemas/Exceptions.PlatformErrorCodes)

## `GroupsForMemberFilter`

- **All**: 0
- **Founded**: 1
- **NonFounded**: 2

Source: [GroupsV2.GroupsForMemberFilter](https://bungie-net.github.io/#/components/schemas/GroupsV2.GroupsForMemberFilter)

## `DropStateEnum`

- **Claimed**: 0
- **Applied**: 1
- **Fulfilled**: 2

Source: [Streaming.DropStateEnum](https://bungie-net.github.io/#/components/schemas/Streaming.DropStateEnum)

## `ItemBindStatus`

- **NotBound**: 0
- **BoundToCharacter**: 1
- **BoundToAccount**: 2
- **BoundToGuild**: 3

Source: [Destiny.ItemBindStatus](https://bungie-net.github.io/#/components/schemas/Destiny.ItemBindStatus)

## `TransferStatuses`

Whether you can transfer an item, and why not if you can't.

- **CanTransfer**: 0
  > The item can be transferred.
- **ItemIsEquipped**: 1
  > You can't transfer the item because it is equipped on a character.
- **NotTransferrable**: 2
  > The item is defined as not transferrable in its DestinyInventoryItemDefinition.nonTransferrable property.
- **NoRoomInDestination**: 4
  > You could transfer the item, but the place you're trying to put it has run out of room! Check your remaining Vault and/or character space.

Source: [Destiny.TransferStatuses](https://bungie-net.github.io/#/components/schemas/Destiny.TransferStatuses)

## `ItemState`

A flags enumeration/bitmask where each bit represents a different possible state that the item can be in that may effect how the item is displayed to the user and what actions can be performed against it.

- **None**: 0
- **Locked**: 1
  > If this bit is set, the item has been "locked" by the user and cannot be deleted. You may want to represent this visually with a "lock" icon.
- **Tracked**: 2
  > If this bit is set, the item is a quest that's being tracked by the user. You may want a visual indicator to show that this is a tracked quest.
- **Masterwork**: 4
  > If this bit is set, the item has a Masterwork plug inserted. This usually coincides with having a special "glowing" effect applied to the item's icon.
- **Crafted**: 8
  > If this bit is set, the item has been 'crafted' by the player. You may want to represent this visually with a "crafted" icon overlay.
- **HighlightedObjective**: 16
  > If this bit is set, the item has a 'highlighted' objective. You may want to represent this with an orange-red icon border color.

Source: [Destiny.ItemState](https://bungie-net.github.io/#/components/schemas/Destiny.ItemState)

## `DestinyGameVersions`

A flags enumeration/bitmask indicating the versions of the game that a given user has purchased.

- **None**: 0
- **Destiny2**: 1
- **DLC1**: 2
- **DLC2**: 4
- **Forsaken**: 8
- **YearTwoAnnualPass**: 16
- **Shadowkeep**: 32
- **BeyondLight**: 64
- **Anniversary30th**: 128
- **TheWitchQueen**: 256

Source: [Destiny.DestinyGameVersions](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGameVersions)

## `DestinyComponentType`

Represents the possible components that can be returned from Destiny "Get" calls such as GetProfile, GetCharacter, GetVendor etc... When making one of these requests, you will pass one or more of these components as a comma separated list in the "?components=" querystring parameter. For instance, if you want baseline Profile data, Character Data, and character progressions, you would pass "?components=Profiles,Characters,CharacterProgressions" You may use either the numerical or string values.

- **None**: 0
- **Profiles**: 100
  > Profiles is the most basic component, only relevant when calling GetProfile. This returns basic information about the profile, which is almost nothing: a list of characterIds, some information about the last time you logged in, and that most sobering statistic: how long you've played.
- **VendorReceipts**: 101
  > Only applicable for GetProfile, this will return information about receipts for refundable vendor items.
- **ProfileInventories**: 102
  > Asking for this will get you the profile-level inventories, such as your Vault buckets (yeah, the Vault is really inventory buckets located on your Profile)
- **ProfileCurrencies**: 103
  > This will get you a summary of items on your Profile that we consider to be "currencies", such as Glimmer. I mean, if there's Glimmer in Destiny 2. I didn't say there was Glimmer.
- **ProfileProgression**: 104
  > This will get you any progression-related information that exists on a Profile-wide level, across all characters.
- **PlatformSilver**: 105
  > This will get you information about the silver that this profile has on every platform on which it plays.  You may only request this component for the logged in user's Profile, and will not recieve it if you request it for another Profile.
- **Characters**: 200
  > This will get you summary info about each of the characters in the profile.
- **CharacterInventories**: 201
  > This will get you information about any non-equipped items on the character or character(s) in question, if you're allowed to see it. You have to either be authenticated as that user, or that user must allow anonymous viewing of their non-equipped items in Bungie.Net settings to actually get results.
- **CharacterProgressions**: 202
  > This will get you information about the progression (faction, experience, etc... "levels") relevant to each character, if you are the currently authenticated user or the user has elected to allow anonymous viewing of its progression info.
- **CharacterRenderData**: 203
  > This will get you just enough information to be able to render the character in 3D if you have written a 3D rendering library for Destiny Characters, or "borrowed" ours. It's okay, I won't tell anyone if you're using it. I'm no snitch. (actually, we don't care if you use it - go to town)
- **CharacterActivities**: 204
  > This will return info about activities that a user can see and gating on it, if you are the currently authenticated user or the user has elected to allow anonymous viewing of its progression info. Note that the data returned by this can be unfortunately problematic and relatively unreliable in some cases. We'll eventually work on making it more consistently reliable.
- **CharacterEquipment**: 205
  > This will return info about the equipped items on the character(s). Everyone can see this.
- **ItemInstances**: 300
  > This will return basic info about instanced items - whether they can be equipped, their tracked status, and some info commonly needed in many places (current damage type, primary stat value, etc)
- **ItemObjectives**: 301
  > Items can have Objectives (DestinyObjectiveDefinition) bound to them. If they do, this will return info for items that have such bound objectives.
- **ItemPerks**: 302
  > Items can have perks (DestinyPerkDefinition). If they do, this will return info for what perks are active on items.
- **ItemRenderData**: 303
  > If you just want to render the weapon, this is just enough info to do that rendering.
- **ItemStats**: 304
  > Items can have stats, like rate of fire. Asking for this component will return requested item's stats if they have stats.
- **ItemSockets**: 305
  > Items can have sockets, where plugs can be inserted. Asking for this component will return all info relevant to the sockets on items that have them.
- **ItemTalentGrids**: 306
  > Items can have talent grids, though that matters a lot less frequently than it used to. Asking for this component will return all relevant info about activated Nodes and Steps on this talent grid, like the good ol' days.
- **ItemCommonData**: 307
  > Items that *aren't* instanced still have important information you need to know: how much of it you have, the itemHash so you can look up their DestinyInventoryItemDefinition, whether they're locked, etc... Both instanced and non-instanced items will have these properties. You will get this automatically with Inventory components - you only need to pass this when calling GetItem on a specific item.
- **ItemPlugStates**: 308
  > Items that are "Plugs" can be inserted into sockets. This returns statuses about those plugs and why they can/can't be inserted. I hear you giggling, there's nothing funny about inserting plugs. Get your head out of the gutter and pay attention!
- **ItemPlugObjectives**: 309
  > Sometimes, plugs have objectives on them. This data can get really large, so we split it into its own component. Please, don't grab it unless you need it.
- **ItemReusablePlugs**: 310
  > Sometimes, designers create thousands of reusable plugs and suddenly your response sizes are almost 3MB, and something has to give.  Reusable Plugs were split off as their own component, away from ItemSockets, as a result of the Plug changes in Shadowkeep that made plug data infeasibly large for the most common use cases.  Request this component if and only if you need to know what plugs *could* be inserted into a socket, and need to know it before "drilling" into the details of an item in your application (for instance, if you're doing some sort of interesting sorting or aggregation based on available plugs.  When you get this, you will also need to combine it with "Plug Sets" data if you want a full picture of all of the available plugs: this component will only return plugs that have state data that is per-item. See Plug Sets for available plugs that have Character, Profile, or no state-specific restrictions.
- **Vendors**: 400
  > When obtaining vendor information, this will return summary information about the Vendor or Vendors being returned.
- **VendorCategories**: 401
  > When obtaining vendor information, this will return information about the categories of items provided by the Vendor.
- **VendorSales**: 402
  > When obtaining vendor information, this will return the information about items being sold by the Vendor.
- **Kiosks**: 500
  > Asking for this component will return you the account's Kiosk statuses: that is, what items have been filled out/acquired. But only if you are the currently authenticated user or the user has elected to allow anonymous viewing of its progression info.
- **CurrencyLookups**: 600
  > A "shortcut" component that will give you all of the item hashes/quantities of items that the requested character can use to determine if an action (purchasing, socket insertion) has the required currency. (recall that all currencies are just items, and that some vendor purchases require items that you might not traditionally consider to be a "currency", like plugs/mods!)
- **PresentationNodes**: 700
  > Returns summary status information about all "Presentation Nodes". See DestinyPresentationNodeDefinition for more details, but the gist is that these are entities used by the game UI to bucket Collectibles and Records into a hierarchy of categories. You may ask for and use this data if you want to perform similar bucketing in your own UI: or you can skip it and roll your own.
- **Collectibles**: 800
  > Returns summary status information about all "Collectibles". These are records of what items you've discovered while playing Destiny, and some other basic information. For detailed information, you will have to call a separate endpoint devoted to the purpose.
- **Records**: 900
  > Returns summary status information about all "Records" (also known in the game as "Triumphs". I know, it's confusing because there's also "Moments of Triumph" that will themselves be represented as "Triumphs.")
- **Transitory**: 1000
  > Returns information that Bungie considers to be "Transitory": data that may change too frequently or come from a non-authoritative source such that we don't consider the data to be fully trustworthy, but that might prove useful for some limited use cases. We can provide no guarantee of timeliness nor consistency for this data: buyer beware with the Transitory component.
- **Metrics**: 1100
  > Returns summary status information about all "Metrics" (also known in the game as "Stat Trackers").
- **StringVariables**: 1200
  > Returns a mapping of localized string variable hashes to values, on a per-account or per-character basis.
- **Craftables**: 1300
  > Returns summary status information about all "Craftables" aka crafting recipe items.

Source: [Destiny.DestinyComponentType](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyComponentType)

## `ComponentPrivacySetting`

A set of flags for reason(s) why the component populated in the way that it did. Inspect the individual flags for the reasons.

- **None**: 0
- **Public**: 1
- **Private**: 2

Source: [Components.ComponentPrivacySetting](https://bungie-net.github.io/#/components/schemas/Components.ComponentPrivacySetting)

## `DestinyPresentationNodeState`

I know this doesn't look like a Flags Enumeration/bitmask right now, but I assure you it is. This is the possible states that a Presentation Node can be in, and it is almost certain that its potential states will increase in the future. So don't treat it like a straight up enumeration.

- **None**: 0
- **Invisible**: 1
  > If this is set, the game recommends that you not show this node. But you know your life, do what you've got to do.
- **Obscured**: 2
  > Turns out Presentation Nodes can also be obscured. If they are, this is set.

Source: [Destiny.DestinyPresentationNodeState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPresentationNodeState)

## `DestinyRecordState`

A Flags enumeration/bitmask where each bit represents a possible state that a Record/Triumph can be in.

- **None**: 0
  > If there are no flags set, the record is in a state where it *could* be redeemed, but it has not been yet.
- **RecordRedeemed**: 1
  > If this is set, the completed record has been redeemed.
- **RewardUnavailable**: 2
  > If this is set, there's a reward available from this Record but it's unavailable for redemption.
- **ObjectiveNotCompleted**: 4
  > If this is set, the objective for this Record has not yet been completed.
- **Obscured**: 8
  > If this is set, the game recommends that you replace the display text of this Record with DestinyRecordDefinition.stateInfo.obscuredString.
- **Invisible**: 16
  > If this is set, the game recommends that you not show this record. Do what you will with this recommendation.
- **EntitlementUnowned**: 32
  > If this is set, you can't complete this record because you lack some permission that's required to complete it.
- **CanEquipTitle**: 64
  > If this is set, the record has a title (check DestinyRecordDefinition for title info) and you can equip it.

Source: [Destiny.DestinyRecordState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyRecordState)

## `DestinyCollectibleState`

A Flags Enumeration/bitmask where each bit represents a different state that the Collectible can be in. A collectible can be in any number of these states, and you can choose to use or ignore any or all of them when making your own UI that shows Collectible info. Our displays are going to honor them, but we're also the kind of people who only pretend to inhale before quickly passing it to the left. So, you know, do what you got to do. (All joking aside, please note the caveat I mention around the Invisible flag: there are cases where it is in the best interest of your users to honor these flags even if you're a "show all the data" person. Collector-oriented compulsion is a very unfortunate and real thing, and I would hate to instill that compulsion in others through showing them items that they cannot earn. Please consider this when you are making your own apps/sites.)

- **None**: 0
- **NotAcquired**: 1
  > If this flag is set, you have not yet obtained this collectible.
- **Obscured**: 2
  > If this flag is set, the item is "obscured" to you: you can/should use the alternate item hash found in DestinyCollectibleDefinition.stateInfo.obscuredOverrideItemHash when displaying this collectible instead of the default display info.
- **Invisible**: 4
  > If this flag is set, the collectible should not be shown to the user. Please do consider honoring this flag. It is used - for example - to hide items that a person didn't get from the Eververse. I can't prevent these from being returned in definitions, because some people may have acquired them and thus they should show up: but I would hate for people to start feeling some variant of a Collector's Remorse about these items, and thus increasing their purchasing based on that compulsion. That would be a very unfortunate outcome, and one that I wouldn't like to see happen. So please, whether or not I'm your mom, consider honoring this flag and don't show people invisible collectibles.
- **CannotAffordMaterialRequirements**: 8
  > If this flag is set, the collectible requires payment for creating an instance of the item, and you are lacking in currency. Bring the benjamins next time. Or spinmetal. Whatever.
- **InventorySpaceUnavailable**: 16
  > If this flag is set, you can't pull this item out of your collection because there's no room left in your inventory.
- **UniquenessViolation**: 32
  > If this flag is set, you already have one of these items and can't have a second one.
- **PurchaseDisabled**: 64
  > If this flag is set, the ability to pull this item out of your collection has been disabled.

Source: [Destiny.DestinyCollectibleState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyCollectibleState)

## `DestinyPartyMemberStates`

A flags enumeration that represents a Fireteam Member's status.

- **None**: 0
- **FireteamMember**: 1
  > This one's pretty obvious - they're on your Fireteam.
- **PosseMember**: 2
  > I don't know what it means to be in a 'Posse', but apparently this is it.
- **GroupMember**: 4
  > Nor do I understand the difference between them being in a 'Group' vs. a 'Fireteam'. I'll update these docs once I get more info. If I get more info. If you're reading this, I never got more info. You're on your own, kid.
- **PartyLeader**: 8
  > This person is the party leader.

Source: [Destiny.DestinyPartyMemberStates](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyPartyMemberStates)

## `DestinyGamePrivacySetting`

A player can choose to restrict requests to join their Fireteam to specific states. These are the possible states a user can choose.

- **Open**: 0
- **ClanAndFriendsOnly**: 1
- **FriendsOnly**: 2
- **InvitationOnly**: 3
- **Closed**: 4

Source: [Destiny.DestinyGamePrivacySetting](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyGamePrivacySetting)

## `DestinyJoinClosedReasons`

A Flags enumeration representing the reasons why a person can't join this user's fireteam.

- **None**: 0
- **InMatchmaking**: 1
  > The user is currently in matchmaking.
- **Loading**: 2
  > The user is currently in a loading screen.
- **SoloMode**: 4
  > The user is in an activity that requires solo play.
- **InternalReasons**: 8
  > The user can't be joined for one of a variety of internal reasons. Basically, the game can't let you join at this time, but for reasons that aren't under the control of this user.
- **DisallowedByGameState**: 16
  > The user's current activity/quest/other transitory game state is preventing joining.
- **Offline**: 32768
  > The user appears to be offline.

Source: [Destiny.DestinyJoinClosedReasons](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyJoinClosedReasons)

## `DestinyRace`

- **Human**: 0
- **Awoken**: 1
- **Exo**: 2
- **Unknown**: 3

Source: [Destiny.DestinyRace](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyRace)

## `DestinyMilestoneDisplayPreference`

A hint for the UI as to what display information ought to be shown. Defaults to showing the static MilestoneDefinition's display properties.  If for some reason the indicated property is not populated, fall back to the MilestoneDefinition.displayProperties.

- **MilestoneDefinition**: 0
  > Indicates you should show DestinyMilestoneDefinition.displayProperties for this Milestone.
- **CurrentQuestSteps**: 1
  > Indicates you should show the displayProperties for any currently active Quest Steps in DestinyMilestone.availableQuests.
- **CurrentActivityChallenges**: 2
  > Indicates you should show the displayProperties for any currently active Activities and their Challenges in DestinyMilestone.activities.

Source: [Destiny.Definitions.Milestones.DestinyMilestoneDisplayPreference](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneDisplayPreference)

## `DestinyMilestoneType`

The type of milestone. Milestones can be Tutorials, one-time/triggered/non-repeating but not necessarily tutorials, or Repeating Milestones.

- **Unknown**: 0
- **Tutorial**: 1
  > One-time milestones that are specifically oriented toward teaching players about new mechanics and gameplay modes.
- **OneTime**: 2
  > Milestones that, once completed a single time, can never be repeated.
- **Weekly**: 3
  > Milestones that repeat/reset on a weekly basis. They need not all reset on the same day or time, but do need to reset weekly to qualify for this type.
- **Daily**: 4
  > Milestones that repeat or reset on a daily basis.
- **Special**: 5
  > Special indicates that the event is not on a daily/weekly cadence, but does occur more than once. For instance, Iron Banner in Destiny 1 or the Dawning were examples of what could be termed "Special" events.

Source: [Destiny.Definitions.Milestones.DestinyMilestoneType](https://bungie-net.github.io/#/components/schemas/Destiny.Definitions.Milestones.DestinyMilestoneType)

## `DestinyActivityDifficultyTier`

An enumeration representing the potential difficulty levels of an activity. Their names are... more qualitative than quantitative.

- **Trivial**: 0
- **Easy**: 1
- **Normal**: 2
- **Challenging**: 3
- **Hard**: 4
- **Brave**: 5
- **AlmostImpossible**: 6
- **Impossible**: 7

Source: [Destiny.DestinyActivityDifficultyTier](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyActivityDifficultyTier)

## `EquipFailureReason`

The reasons why an item cannot be equipped, if any. Many flags can be set, or "None" if

- **None**: 0
  > The item is/was able to be equipped.
- **ItemUnequippable**: 1
  > This is not the kind of item that can be equipped. Did you try equipping Glimmer or something?
- **ItemUniqueEquipRestricted**: 2
  > This item is part of a "unique set", and you can't have more than one item of that same set type equipped at once. For instance, if you already have an Exotic Weapon equipped, you can't equip a second one in another weapon slot.
- **ItemFailedUnlockCheck**: 4
  > This item has state-based gating that prevents it from being equipped in certain circumstances. For instance, an item might be for Warlocks only and you're a Titan, or it might require you to have beaten some special quest that you haven't beaten yet. Use the additional failure data passed on the item itself to get more information about what the specific failure case was (See DestinyInventoryItemDefinition and DestinyItemInstanceComponent)
- **ItemFailedLevelCheck**: 8
  > This item requires you to have reached a specific character level in order to equip it, and you haven't reached that level yet.
- **ItemNotOnCharacter**: 16
  > This item can't be equipped on the character requested, because it must be in that character's inventory first. Transfer the item to the character you want to equip it before you attempt to equip it.

Source: [Destiny.EquipFailureReason](https://bungie-net.github.io/#/components/schemas/Destiny.EquipFailureReason)

## `DestinyTalentNodeState`

- **Invalid**: 0
- **CanUpgrade**: 1
- **NoPoints**: 2
- **NoPrerequisites**: 3
- **NoSteps**: 4
- **NoUnlock**: 5
- **NoMaterial**: 6
- **NoGridLevel**: 7
- **SwappingLocked**: 8
- **MustSwap**: 9
- **Complete**: 10
- **Unknown**: 11
- **CreationOnly**: 12
- **Hidden**: 13

Source: [Destiny.DestinyTalentNodeState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyTalentNodeState)

## `DestinyVendorFilter`

Indicates the type of filter to apply to Vendor results.

- **None**: 0
- **ApiPurchasable**: 1

Source: [Destiny.DestinyVendorFilter](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorFilter)

## `VendorItemStatus`

- **Success**: 0
- **NoInventorySpace**: 1
- **NoFunds**: 2
- **NoProgression**: 4
- **NoUnlock**: 8
- **NoQuantity**: 16
- **OutsidePurchaseWindow**: 32
- **NotAvailable**: 64
- **UniquenessViolation**: 128
- **UnknownError**: 256
- **AlreadySelling**: 512
- **Unsellable**: 1024
- **SellingInhibited**: 2048
- **AlreadyOwned**: 4096
- **DisplayOnly**: 8192

Source: [Destiny.VendorItemStatus](https://bungie-net.github.io/#/components/schemas/Destiny.VendorItemStatus)

## `DestinyVendorItemState`

The possible states of Destiny Profile Records. IMPORTANT: Any given item can theoretically have many of these states simultaneously: as a result, this was altered to be a flags enumeration/bitmask for v3.2.0.

- **None**: 0
  > There are no augments on the item.
- **Incomplete**: 1
  > Deprecated forever (probably). There was a time when Records were going to be implemented through Vendors, and this field was relevant. Now they're implemented through Presentation Nodes, and this field doesn't matter anymore.
- **RewardAvailable**: 2
  > Deprecated forever (probably). See the description of the "Incomplete" value for the juicy scoop.
- **Complete**: 4
  > Deprecated forever (probably). See the description of the "Incomplete" value for the juicy scoop.
- **New**: 8
  > This item is considered to be "newly available", and should have some UI showing how shiny it is.
- **Featured**: 16
  > This item is being "featured", and should be shiny in a different way from items that are merely new.
- **Ending**: 32
  > This item is only available for a limited time, and that time is approaching.
- **OnSale**: 64
  > This item is "on sale". Get it while it's hot.
- **Owned**: 128
  > This item is already owned.
- **WideView**: 256
  > This item should be shown with a "wide view" instead of normal icon view.
- **NexusAttention**: 512
  > This indicates that you should show some kind of attention-requesting indicator on the item, in a similar manner to items in the nexus that have such notifications.
- **SetDiscount**: 1024
  > This indicates that the item has some sort of a 'set' discount.
- **PriceDrop**: 2048
  > This indicates that the item has a price drop.
- **DailyOffer**: 4096
  > This indicates that the item is a daily offer.
- **Charity**: 8192
  > This indicates that the item is for charity.
- **SeasonalRewardExpiration**: 16384
  > This indicates that the item has a seasonal reward expiration.
- **BestDeal**: 32768
  > This indicates that the sale item is the best deal among different choices.
- **Popular**: 65536
  > This indicates that the sale item is popular.
- **Free**: 131072
  > This indicates that the sale item is free.
- **Locked**: 262144
  > This indicates that the sale item is locked.

Source: [Destiny.DestinyVendorItemState](https://bungie-net.github.io/#/components/schemas/Destiny.DestinyVendorItemState)

## `DestinySocketArrayType`

If you look in the DestinyInventoryItemDefinition's "sockets" property, you'll see that there are two types of sockets: intrinsic, and "socketEntry." Unfortunately, because Intrinsic sockets are a whole separate array, it is no longer sufficient to know the index into that array to know which socket we're talking about. You have to know whether it's in the default "socketEntries" or if it's in the "intrinsic" list.

- **Default**: 0
- **Intrinsic**: 1

Source: [Destiny.Requests.Actions.DestinySocketArrayType](https://bungie-net.github.io/#/components/schemas/Destiny.Requests.Actions.DestinySocketArrayType)

## `DestinyStatsGroupType`

If the enum value is > 100, it is a "special" group that cannot be queried for directly (special cases apply to when they are returned, and are not relevant in general cases)

- **None**: 0
- **General**: 1
- **Weapons**: 2
- **Medals**: 3
- **ReservedGroups**: 100
  > This is purely to serve as the dividing line between filterable and un-filterable groups. Below this number is a group you can pass as a filter. Above it are groups used in very specific circumstances and not relevant for filtering.
- **Leaderboard**: 101
  > Only applicable while generating leaderboards.
- **Activity**: 102
  > These will *only* be consumed by GetAggregateStatsByActivity
- **UniqueWeapon**: 103
  > These are only consumed and returned by GetUniqueWeaponHistory
- **Internal**: 104

Source: [Destiny.HistoricalStats.Definitions.DestinyStatsGroupType](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyStatsGroupType)

## `DestinyStatsCategoryType`

- **None**: 0
- **Kills**: 1
- **Assists**: 2
- **Deaths**: 3
- **Criticals**: 4
- **KDa**: 5
- **KD**: 6
- **Score**: 7
- **Entered**: 8
- **TimePlayed**: 9
- **MedalWins**: 10
- **MedalGame**: 11
- **MedalSpecialKills**: 12
- **MedalSprees**: 13
- **MedalMultiKills**: 14
- **MedalAbilities**: 15

Source: [Destiny.HistoricalStats.Definitions.DestinyStatsCategoryType](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyStatsCategoryType)

## `UnitType`

- **None**: 0
- **Count**: 1
  > Indicates the statistic is a simple count of something.
- **PerGame**: 2
  > Indicates the statistic is a per game average.
- **Seconds**: 3
  > Indicates the number of seconds
- **Points**: 4
  > Indicates the number of points earned
- **Team**: 5
  > Values represents a team ID
- **Distance**: 6
  > Values represents a distance (units to-be-determined)
- **Percent**: 7
  > Ratio represented as a whole value from 0 to 100.
- **Ratio**: 8
  > Ratio of something, shown with decimal places
- **Boolean**: 9
  > True or false
- **WeaponType**: 10
  > The stat is actually a weapon type.
- **Standing**: 11
  > Indicates victory, defeat, or something in between.
- **Milliseconds**: 12
  > Number of milliseconds some event spanned. For example, race time, or lap time.
- **CompletionReason**: 13
  > The value is a enumeration of the Completion Reason type.

Source: [Destiny.HistoricalStats.Definitions.UnitType](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.UnitType)

## `DestinyStatsMergeMethod`

- **Add**: 0
  > When collapsing multiple instances of the stat together, add the values.
- **Min**: 1
  > When collapsing multiple instances of the stat together, take the lower value.
- **Max**: 2
  > When collapsing multiple instances of the stat together, take the higher value.

Source: [Destiny.HistoricalStats.Definitions.DestinyStatsMergeMethod](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.DestinyStatsMergeMethod)

## `PeriodType`

- **None**: 0
- **Daily**: 1
- **AllTime**: 2
- **Activity**: 3

Source: [Destiny.HistoricalStats.Definitions.PeriodType](https://bungie-net.github.io/#/components/schemas/Destiny.HistoricalStats.Definitions.PeriodType)

## `AwaType`

- **None**: 0
- **InsertPlugs**: 1
  > Insert plugs into sockets.

Source: [Destiny.Advanced.AwaType](https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaType)

## `AwaUserSelection`

- **None**: 0
- **Rejected**: 1
- **Approved**: 2

Source: [Destiny.Advanced.AwaUserSelection](https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaUserSelection)

## `AwaResponseReason`

- **None**: 0
- **Answered**: 1
  > User provided an answer
- **TimedOut**: 2
  > The HTTP request timed out, a new request may be made and an answer may still be provided.
- **Replaced**: 3
  > This request was replaced by another request.

Source: [Destiny.Advanced.AwaResponseReason](https://bungie-net.github.io/#/components/schemas/Destiny.Advanced.AwaResponseReason)

## `CommunityContentSortMode`

- **Trending**: 0
- **Latest**: 1
- **HighestRated**: 2

Source: [Forum.CommunityContentSortMode](https://bungie-net.github.io/#/components/schemas/Forum.CommunityContentSortMode)

## `TrendingEntryType`

The known entity types that you can have returned from Trending.

- **News**: 0
- **DestinyItem**: 1
- **DestinyActivity**: 2
- **DestinyRitual**: 3
- **SupportArticle**: 4
- **Creation**: 5
- **Stream**: 6
- **Update**: 7
- **Link**: 8
- **ForumTag**: 9
- **Container**: 10
- **Release**: 11

Source: [Trending.TrendingEntryType](https://bungie-net.github.io/#/components/schemas/Trending.TrendingEntryType)

## `FireteamDateRange`

- **All**: 0
- **Now**: 1
- **TwentyFourHours**: 2
- **FortyEightHours**: 3
- **ThisWeek**: 4

Source: [Fireteam.FireteamDateRange](https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamDateRange)

## `FireteamPlatform`

- **Any**: 0
- **Playstation4**: 1
- **XboxOne**: 2
- **Blizzard**: 3
- **Steam**: 4
- **Stadia**: 5
- **Egs**: 6

Source: [Fireteam.FireteamPlatform](https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamPlatform)

## `FireteamPublicSearchOption`

- **PublicAndPrivate**: 0
- **PublicOnly**: 1
- **PrivateOnly**: 2

Source: [Fireteam.FireteamPublicSearchOption](https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamPublicSearchOption)

## `FireteamSlotSearch`

- **NoSlotRestriction**: 0
- **HasOpenPlayerSlots**: 1
- **HasOpenPlayerOrAltSlots**: 2

Source: [Fireteam.FireteamSlotSearch](https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamSlotSearch)

## `FireteamPlatformInviteResult`

- **None**: 0
- **Success**: 1
- **AlreadyInFireteam**: 2
- **Throttled**: 3
- **ServiceError**: 4

Source: [Fireteam.FireteamPlatformInviteResult](https://bungie-net.github.io/#/components/schemas/Fireteam.FireteamPlatformInviteResult)

## `PresenceStatus`

- **OfflineOrUnknown**: 0
- **Online**: 1

Source: [Social.Friends.PresenceStatus](https://bungie-net.github.io/#/components/schemas/Social.Friends.PresenceStatus)

## `PresenceOnlineStateFlags`

- **None**: 0
- **Destiny1**: 1
- **Destiny2**: 2

Source: [Social.Friends.PresenceOnlineStateFlags](https://bungie-net.github.io/#/components/schemas/Social.Friends.PresenceOnlineStateFlags)

## `FriendRelationshipState`

- **Unknown**: 0
- **Friend**: 1
- **IncomingRequest**: 2
- **OutgoingRequest**: 3

Source: [Social.Friends.FriendRelationshipState](https://bungie-net.github.io/#/components/schemas/Social.Friends.FriendRelationshipState)

## `PlatformFriendType`

- **Unknown**: 0
- **Xbox**: 1
- **PSN**: 2
- **Steam**: 3
- **Egs**: 4

Source: [Social.Friends.PlatformFriendType](https://bungie-net.github.io/#/components/schemas/Social.Friends.PlatformFriendType)

## `OptInFlags`

- **None**: 0
- **Newsletter**: 1
- **System**: 2
- **Marketing**: 4
- **UserResearch**: 8
- **CustomerService**: 16
- **Social**: 32
- **PlayTests**: 64
- **PlayTestsLocal**: 128
- **Careers**: 256

Source: [User.OptInFlags](https://bungie-net.github.io/#/components/schemas/User.OptInFlags)

## `GlobalAlertLevel`

- **Unknown**: 0
- **Blue**: 1
- **Yellow**: 2
- **Red**: 3

Source: [GlobalAlertLevel](https://bungie-net.github.io/#/components/schemas/GlobalAlertLevel)

## `GlobalAlertType`

- **GlobalAlert**: 0
- **StreamingAlert**: 1

Source: [GlobalAlertType](https://bungie-net.github.io/#/components/schemas/GlobalAlertType)
