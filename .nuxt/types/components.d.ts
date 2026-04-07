
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T> = DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>> & T

type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }> & T

interface _GlobalComponents {
  CarCard: typeof import("../../components/cars/CarCard.vue")['default']
  CarCardHorizontal: typeof import("../../components/cars/CarCardHorizontal.vue")['default']
  CarFilters: typeof import("../../components/cars/CarFilters.vue")['default']
  CarGallery: typeof import("../../components/cars/CarGallery.vue")['default']
  CarPricingHistory: typeof import("../../components/cars/CarPricingHistory.vue")['default']
  CarSpecs: typeof import("../../components/cars/CarSpecs.vue")['default']
  CompareBar: typeof import("../../components/cars/CompareBar.vue")['default']
  DealRatingBadge: typeof import("../../components/cars/DealRatingBadge.vue")['default']
  DealerCard: typeof import("../../components/dealer/DealerCard.vue")['default']
  DealerMap: typeof import("../../components/dealer/DealerMap.vue")['default']
  LoanCalculator: typeof import("../../components/finance/LoanCalculator.vue")['default']
  BodyTypeFilter: typeof import("../../components/home/BodyTypeFilter.vue")['default']
  DealOfWeek: typeof import("../../components/home/DealOfWeek.vue")['default']
  FeaturedListings: typeof import("../../components/home/FeaturedListings.vue")['default']
  HeroSection: typeof import("../../components/home/HeroSection.vue")['default']
  NewArrivals: typeof import("../../components/home/NewArrivals.vue")['default']
  NewsSection: typeof import("../../components/home/NewsSection.vue")['default']
  PopularBrands: typeof import("../../components/home/PopularBrands.vue")['default']
  PriceRangeCards: typeof import("../../components/home/PriceRangeCards.vue")['default']
  RecentReviews: typeof import("../../components/home/RecentReviews.vue")['default']
  AppFooter: typeof import("../../components/layout/AppFooter.vue")['default']
  AppHeader: typeof import("../../components/layout/AppHeader.vue")['default']
  MobileMenu: typeof import("../../components/layout/MobileMenu.vue")['default']
  SearchBar: typeof import("../../components/layout/SearchBar.vue")['default']
  NewsCard: typeof import("../../components/news/NewsCard.vue")['default']
  ExpertReviewCard: typeof import("../../components/reviews/ExpertReviewCard.vue")['default']
  RatingBreakdown: typeof import("../../components/reviews/RatingBreakdown.vue")['default']
  UserReviewCard: typeof import("../../components/reviews/UserReviewCard.vue")['default']
  AppBadge: typeof import("../../components/ui/AppBadge.vue")['default']
  AppButton: typeof import("../../components/ui/AppButton.vue")['default']
  AppDropdown: typeof import("../../components/ui/AppDropdown.vue")['default']
  AppModal: typeof import("../../components/ui/AppModal.vue")['default']
  AppToast: typeof import("../../components/ui/AppToast.vue")['default']
  PriceTag: typeof import("../../components/ui/PriceTag.vue")['default']
  SectionTitle: typeof import("../../components/ui/SectionTitle.vue")['default']
  SkeletonCard: typeof import("../../components/ui/SkeletonCard.vue")['default']
  StarRating: typeof import("../../components/ui/StarRating.vue")['default']
  NuxtWelcome: typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']
  NuxtLayout: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
  NuxtErrorBoundary: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
  ClientOnly: typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']
  DevOnly: typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']
  ServerPlaceholder: typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
  NuxtLink: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
  NuxtLoadingIndicator: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
  NuxtTime: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
  NuxtRouteAnnouncer: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
  NuxtImg: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
  NuxtPicture: typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
  ColorScheme: typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
  NuxtPage: typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']
  NoScript: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
  Link: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']
  Base: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']
  Title: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']
  Meta: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']
  Style: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']
  Head: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']
  Html: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']
  Body: typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']
  NuxtIsland: typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
  LazyCarCard: LazyComponent<typeof import("../../components/cars/CarCard.vue")['default']>
  LazyCarCardHorizontal: LazyComponent<typeof import("../../components/cars/CarCardHorizontal.vue")['default']>
  LazyCarFilters: LazyComponent<typeof import("../../components/cars/CarFilters.vue")['default']>
  LazyCarGallery: LazyComponent<typeof import("../../components/cars/CarGallery.vue")['default']>
  LazyCarPricingHistory: LazyComponent<typeof import("../../components/cars/CarPricingHistory.vue")['default']>
  LazyCarSpecs: LazyComponent<typeof import("../../components/cars/CarSpecs.vue")['default']>
  LazyCompareBar: LazyComponent<typeof import("../../components/cars/CompareBar.vue")['default']>
  LazyDealRatingBadge: LazyComponent<typeof import("../../components/cars/DealRatingBadge.vue")['default']>
  LazyDealerCard: LazyComponent<typeof import("../../components/dealer/DealerCard.vue")['default']>
  LazyDealerMap: LazyComponent<typeof import("../../components/dealer/DealerMap.vue")['default']>
  LazyLoanCalculator: LazyComponent<typeof import("../../components/finance/LoanCalculator.vue")['default']>
  LazyBodyTypeFilter: LazyComponent<typeof import("../../components/home/BodyTypeFilter.vue")['default']>
  LazyDealOfWeek: LazyComponent<typeof import("../../components/home/DealOfWeek.vue")['default']>
  LazyFeaturedListings: LazyComponent<typeof import("../../components/home/FeaturedListings.vue")['default']>
  LazyHeroSection: LazyComponent<typeof import("../../components/home/HeroSection.vue")['default']>
  LazyNewArrivals: LazyComponent<typeof import("../../components/home/NewArrivals.vue")['default']>
  LazyNewsSection: LazyComponent<typeof import("../../components/home/NewsSection.vue")['default']>
  LazyPopularBrands: LazyComponent<typeof import("../../components/home/PopularBrands.vue")['default']>
  LazyPriceRangeCards: LazyComponent<typeof import("../../components/home/PriceRangeCards.vue")['default']>
  LazyRecentReviews: LazyComponent<typeof import("../../components/home/RecentReviews.vue")['default']>
  LazyAppFooter: LazyComponent<typeof import("../../components/layout/AppFooter.vue")['default']>
  LazyAppHeader: LazyComponent<typeof import("../../components/layout/AppHeader.vue")['default']>
  LazyMobileMenu: LazyComponent<typeof import("../../components/layout/MobileMenu.vue")['default']>
  LazySearchBar: LazyComponent<typeof import("../../components/layout/SearchBar.vue")['default']>
  LazyNewsCard: LazyComponent<typeof import("../../components/news/NewsCard.vue")['default']>
  LazyExpertReviewCard: LazyComponent<typeof import("../../components/reviews/ExpertReviewCard.vue")['default']>
  LazyRatingBreakdown: LazyComponent<typeof import("../../components/reviews/RatingBreakdown.vue")['default']>
  LazyUserReviewCard: LazyComponent<typeof import("../../components/reviews/UserReviewCard.vue")['default']>
  LazyAppBadge: LazyComponent<typeof import("../../components/ui/AppBadge.vue")['default']>
  LazyAppButton: LazyComponent<typeof import("../../components/ui/AppButton.vue")['default']>
  LazyAppDropdown: LazyComponent<typeof import("../../components/ui/AppDropdown.vue")['default']>
  LazyAppModal: LazyComponent<typeof import("../../components/ui/AppModal.vue")['default']>
  LazyAppToast: LazyComponent<typeof import("../../components/ui/AppToast.vue")['default']>
  LazyPriceTag: LazyComponent<typeof import("../../components/ui/PriceTag.vue")['default']>
  LazySectionTitle: LazyComponent<typeof import("../../components/ui/SectionTitle.vue")['default']>
  LazySkeletonCard: LazyComponent<typeof import("../../components/ui/SkeletonCard.vue")['default']>
  LazyStarRating: LazyComponent<typeof import("../../components/ui/StarRating.vue")['default']>
  LazyNuxtWelcome: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
  LazyNuxtLayout: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
  LazyNuxtErrorBoundary: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
  LazyClientOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/client-only")['default']>
  LazyDevOnly: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/dev-only")['default']>
  LazyServerPlaceholder: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
  LazyNuxtLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
  LazyNuxtLoadingIndicator: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
  LazyNuxtTime: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
  LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
  LazyNuxtImg: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
  LazyNuxtPicture: LazyComponent<typeof import("../../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
  LazyColorScheme: LazyComponent<typeof import("../../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
  LazyNuxtPage: LazyComponent<typeof import("../../node_modules/nuxt/dist/pages/runtime/page")['default']>
  LazyNoScript: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
  LazyLink: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Link']>
  LazyBase: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Base']>
  LazyTitle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Title']>
  LazyMeta: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Meta']>
  LazyStyle: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Style']>
  LazyHead: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Head']>
  LazyHtml: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Html']>
  LazyBody: LazyComponent<typeof import("../../node_modules/nuxt/dist/head/runtime/components")['Body']>
  LazyNuxtIsland: LazyComponent<typeof import("../../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export {}
