import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🦋 Butterfly Docs",
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
    light: "#fffaf3",                            // page background
    lightgray: "#e8e6e1",                        // borders
    gray: "#d1cec9",                             // graph links, heavier borders
    darkgray: "#6f6e69",                         // body text (li-gray)
    dark: "#2c2b2a",                             // header text and icons
    secondary: "rgb(188, 82, 21)",               // brand orange (li-or)
    tertiary: "rgba(188, 82, 21, 0.3)",          // hover/visited links
    highlight: "rgba(188, 82, 21, 0.1)",         // link/code bg highlight
    textHighlight: "rgba(255, 242, 54, 0.53)",   // markdown highlight
  },
  darkMode: {
    light: "#121212",                            // page background
    lightgray: "#2b2b2b",                        // borders
    gray: "#3f3f3f",                             // graph links, heavier borders
    darkgray: "#9f9d96",                         // body text (da-gray)
    dark: "#f5f5f5",                             // header text and icons
    secondary: "rgb(218, 112, 44)",              // brand orange (da-or)
    tertiary: "rgba(218, 112, 44, 0.3)",         // hover/visited links
    highlight: "rgba(218, 112, 44, 0.15)",       // link/code bg highlight
    textHighlight: "rgba(179, 170, 2, 0.53)",    // markdown highlight
  },
}

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
    filters: [Plugin.ExplicitPublish()],
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
