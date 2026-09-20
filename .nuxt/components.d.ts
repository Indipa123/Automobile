
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


export const CarCard: typeof import("../components/cars/CarCard.vue")['default']
export const CarCardHorizontal: typeof import("../components/cars/CarCardHorizontal.vue")['default']
export const CarFilters: typeof import("../components/cars/CarFilters.vue")['default']
export const CarGallery: typeof import("../components/cars/CarGallery.vue")['default']
export const CarPricingHistory: typeof import("../components/cars/CarPricingHistory.vue")['default']
export const CarSpecs: typeof import("../components/cars/CarSpecs.vue")['default']
export const CompareBar: typeof import("../components/cars/CompareBar.vue")['default']
export const DealRatingBadge: typeof import("../components/cars/DealRatingBadge.vue")['default']
export const DealerCard: typeof import("../components/dealer/DealerCard.vue")['default']
export const DealerMap: typeof import("../components/dealer/DealerMap.vue")['default']
export const LoanCalculator: typeof import("../components/finance/LoanCalculator.vue")['default']
export const BodyTypeFilter: typeof import("../components/home/BodyTypeFilter.vue")['default']
export const DealOfWeek: typeof import("../components/home/DealOfWeek.vue")['default']
export const FeaturedListings: typeof import("../components/home/FeaturedListings.vue")['default']
export const HeroSection: typeof import("../components/home/HeroSection.vue")['default']
export const NewArrivals: typeof import("../components/home/NewArrivals.vue")['default']
export const NewsSection: typeof import("../components/home/NewsSection.vue")['default']
export const PopularBrands: typeof import("../components/home/PopularBrands.vue")['default']
export const PriceRangeCards: typeof import("../components/home/PriceRangeCards.vue")['default']
export const RecentReviews: typeof import("../components/home/RecentReviews.vue")['default']
export const AppFooter: typeof import("../components/layout/AppFooter.vue")['default']
export const AppHeader: typeof import("../components/layout/AppHeader.vue")['default']
export const MobileBottomNav: typeof import("../components/layout/MobileBottomNav.vue")['default']
export const MobileMenu: typeof import("../components/layout/MobileMenu.vue")['default']
export const SearchBar: typeof import("../components/layout/SearchBar.vue")['default']
export const NewsCard: typeof import("../components/news/NewsCard.vue")['default']
export const ExpertReviewCard: typeof import("../components/reviews/ExpertReviewCard.vue")['default']
export const RatingBreakdown: typeof import("../components/reviews/RatingBreakdown.vue")['default']
export const UserReviewCard: typeof import("../components/reviews/UserReviewCard.vue")['default']
export const AppBadge: typeof import("../components/ui/AppBadge.vue")['default']
export const AppButton: typeof import("../components/ui/AppButton.vue")['default']
export const AppDropdown: typeof import("../components/ui/AppDropdown.vue")['default']
export const AppModal: typeof import("../components/ui/AppModal.vue")['default']
export const AppToast: typeof import("../components/ui/AppToast.vue")['default']
export const PriceTag: typeof import("../components/ui/PriceTag.vue")['default']
export const SectionTitle: typeof import("../components/ui/SectionTitle.vue")['default']
export const SkeletonCard: typeof import("../components/ui/SkeletonCard.vue")['default']
export const StarRating: typeof import("../components/ui/StarRating.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtTime: typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']
export const NuxtPicture: typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']
export const ColorScheme: typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyCarCard: LazyComponent<typeof import("../components/cars/CarCard.vue")['default']>
export const LazyCarCardHorizontal: LazyComponent<typeof import("../components/cars/CarCardHorizontal.vue")['default']>
export const LazyCarFilters: LazyComponent<typeof import("../components/cars/CarFilters.vue")['default']>
export const LazyCarGallery: LazyComponent<typeof import("../components/cars/CarGallery.vue")['default']>
export const LazyCarPricingHistory: LazyComponent<typeof import("../components/cars/CarPricingHistory.vue")['default']>
export const LazyCarSpecs: LazyComponent<typeof import("../components/cars/CarSpecs.vue")['default']>
export const LazyCompareBar: LazyComponent<typeof import("../components/cars/CompareBar.vue")['default']>
export const LazyDealRatingBadge: LazyComponent<typeof import("../components/cars/DealRatingBadge.vue")['default']>
export const LazyDealerCard: LazyComponent<typeof import("../components/dealer/DealerCard.vue")['default']>
export const LazyDealerMap: LazyComponent<typeof import("../components/dealer/DealerMap.vue")['default']>
export const LazyLoanCalculator: LazyComponent<typeof import("../components/finance/LoanCalculator.vue")['default']>
export const LazyBodyTypeFilter: LazyComponent<typeof import("../components/home/BodyTypeFilter.vue")['default']>
export const LazyDealOfWeek: LazyComponent<typeof import("../components/home/DealOfWeek.vue")['default']>
export const LazyFeaturedListings: LazyComponent<typeof import("../components/home/FeaturedListings.vue")['default']>
export const LazyHeroSection: LazyComponent<typeof import("../components/home/HeroSection.vue")['default']>
export const LazyNewArrivals: LazyComponent<typeof import("../components/home/NewArrivals.vue")['default']>
export const LazyNewsSection: LazyComponent<typeof import("../components/home/NewsSection.vue")['default']>
export const LazyPopularBrands: LazyComponent<typeof import("../components/home/PopularBrands.vue")['default']>
export const LazyPriceRangeCards: LazyComponent<typeof import("../components/home/PriceRangeCards.vue")['default']>
export const LazyRecentReviews: LazyComponent<typeof import("../components/home/RecentReviews.vue")['default']>
export const LazyAppFooter: LazyComponent<typeof import("../components/layout/AppFooter.vue")['default']>
export const LazyAppHeader: LazyComponent<typeof import("../components/layout/AppHeader.vue")['default']>
export const LazyMobileBottomNav: LazyComponent<typeof import("../components/layout/MobileBottomNav.vue")['default']>
export const LazyMobileMenu: LazyComponent<typeof import("../components/layout/MobileMenu.vue")['default']>
export const LazySearchBar: LazyComponent<typeof import("../components/layout/SearchBar.vue")['default']>
export const LazyNewsCard: LazyComponent<typeof import("../components/news/NewsCard.vue")['default']>
export const LazyExpertReviewCard: LazyComponent<typeof import("../components/reviews/ExpertReviewCard.vue")['default']>
export const LazyRatingBreakdown: LazyComponent<typeof import("../components/reviews/RatingBreakdown.vue")['default']>
export const LazyUserReviewCard: LazyComponent<typeof import("../components/reviews/UserReviewCard.vue")['default']>
export const LazyAppBadge: LazyComponent<typeof import("../components/ui/AppBadge.vue")['default']>
export const LazyAppButton: LazyComponent<typeof import("../components/ui/AppButton.vue")['default']>
export const LazyAppDropdown: LazyComponent<typeof import("../components/ui/AppDropdown.vue")['default']>
export const LazyAppModal: LazyComponent<typeof import("../components/ui/AppModal.vue")['default']>
export const LazyAppToast: LazyComponent<typeof import("../components/ui/AppToast.vue")['default']>
export const LazyPriceTag: LazyComponent<typeof import("../components/ui/PriceTag.vue")['default']>
export const LazySectionTitle: LazyComponent<typeof import("../components/ui/SectionTitle.vue")['default']>
export const LazySkeletonCard: LazyComponent<typeof import("../components/ui/SkeletonCard.vue")['default']>
export const LazyStarRating: LazyComponent<typeof import("../components/ui/StarRating.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary.vue")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtTime: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-time.vue")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue")['default']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/@nuxt/image/dist/runtime/components/NuxtPicture.vue")['default']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>

export const componentNames: string[]
