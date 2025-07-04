import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Butterfly Docs",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "it-IT",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
  lightMode: {
    light: "rgb(255, 255, 255)",
    lightgray: "rgb(240, 240, 240)",
    gray: "rgb(111, 110, 105)",         // li-gray
    darkgray: "rgb(94, 64, 157)",       // li-pu (es. testo importante)
    dark: "rgb(32, 94, 166)",           // li-bl
    secondary: "rgb(36, 131, 123)",     // li-cy
    tertiary: "rgb(102, 128, 11)",      // li-gr
    highlight: "rgba(173, 131, 1, 0.15)", // li-ye
    textHighlight: "rgba(160, 47, 111, 0.5)", // li-ma
  },
  darkMode: {
    light: "rgb(22, 22, 24)",
    lightgray: "rgb(50, 50, 50)",
    gray: "rgb(159, 157, 150)",         // da-gray
    darkgray: "rgb(139, 126, 200)",     // da-pu
    dark: "rgb(67, 133, 190)",          // da-bl
    secondary: "rgb(58, 169, 159)",     // da-cy
    tertiary: "rgb(135, 154, 57)",      // da-gr
    highlight: "rgba(208, 162, 21, 0.15)", // da-ye
    textHighlight: "rgba(206, 93, 151, 0.5)", // da-ma
  },
},

    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
