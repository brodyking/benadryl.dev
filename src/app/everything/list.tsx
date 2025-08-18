import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Link from "next/link";
import { Button } from "@/components/ui/button"

export function List() {
  /*
    0 => name of project
    1 => description
    2[0] => github link
    2[1] => github link pretty
    3[0] => site link
    3[1] => site link pretty
  */
  const items = [
    [
      "blackjack",
      "a simple blackjack app",
      [
        true,
        "https://github.com/brodyking/blackjack",
        "brodyking/blackjack"
      ],
      [
        true,
        "https://blackjack.test.benadryl.dev/",
        "blackjack.test.benadryl.dev"
      ]
    ],
    [
      "chipledger",
      "chipledger is a web app that tracks buyins and cashouts for poker/blackjack home games.",
      [
        true,
        "https://github.com/brodyking/chipledger",
        "brodyking/chipledger"
      ],
      [
        true,
        "https://chipledger.com",
        "chipledger.com"
      ]
    ],
    [
      "ptrack",
      "this project aims at allowing one to track their nicotine intake, specifically nicotine pouches, to help those quit or try and manage their usage.",
      [
        true,
        "https://github.com/brodyking/ptrack",
        "brodyking/ptrack"
      ],
      [
        true,
        "https://pouchtrack.net",
        "pouchtrack.net"
      ]
    ],
    [
      "flashcarrd",
      "a simple flashcard app written in php and javascript",
      [
        true,
        "https://github.com/brodyking/flashcarrd",
        "brodyking/flashcarrd"
      ],
      [
        true,
        "https://fc.benadryl.dev",
        "fc.benadryl.dev"
      ]
    ],
    [
      "brodys music",
      "assignment for web design class",
      [
        true,
        "https://github.com/brodyking/brodysmusic",
        "brodyking/brodysmusic"
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "vipy",
      "vi but made with python",
      [
        true,
        "https://github.com/brodyking/vipy",
        "brodyking/vipy"
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "ripper",
      "a python application that middlemans spotdl downloads, yt-dlp downloads, and mpv youtube streaming.",
      [
        true,
        "https://github.com/brodyking/ripper",
        "brodyking/ripper"
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "ipodder",
      "a nice frontend for spotdl as a website",
      [
        false,
        "",
        ""
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "bitforums",
      "unfinished forum software",
      [
        true,
        "https://github.com/brodyking/bitforums",
        "brodyking/bitforums"
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "wikimd",
      "a lightweight wiki software that allows for basic page creation in markdown.",
      [
        true,
        "https://github.com/brodyking/wikimd",
        "brodyking/wikimd"
      ],
      [
        false,
        "",
        ""
      ]
    ],
    [
      "staticjs",
      "a web framework made for static websites.",
      [
        true,
        "https://github.com/brodyking/staticjs",
        "brodyking/staticjs"
      ],
      [
        true,
        "https://brodyking.github.io/staticjs/",
        "brodyking.github.io/staticjs/",
      ]
    ],
      [
      "quickblog.js",
      "quickblog.js is a free and open source library that allows you to create a quick blog in minutes",
      [
        true,
        "https://github.com/brodyking/quickblog.js",
        "brodyking/quickblog.js"
      ],
      [
        true,
        "https://brodyking.github.io/quickblog.js",
        "brodyking.github.io/quickblog.js",
      ]
    ],
      [
      "kimmu",
      "kimmu is a fake operation system created in html/css/js.",
      [
        true,
        "https://github.com/brodyking/kimmu",
        "brodyking/kimmu"
      ],
      [
        false,
        "",
        ""
      ]
    ],
  ];
  const listBody = items.map((item, itemIndex) => (
      <AccordionItem key={itemIndex} value={(typeof item[0] === 'string') ? item[0] : ""}>
        <AccordionTrigger className="text-lg">{item[0]}</AccordionTrigger>
        <AccordionContent className="text-balance pb-5">
          <p className="pb-3">{item[1]}</p>
          { (item[2][0]) && (
          <Link href={(typeof item[2][1] === 'string') ? item[2][1] : "#"} className="block w-full md:inline md:w-min mr-2 mt-1">
            <Button variant="outline" className="w-full md:w-min">
              <i className="bi bi-github"></i>
              {item[2][2]}
            </Button>
          </Link>
        ) }
          { (item[3][1]) && (
          <Link href={(typeof item[3][1] === 'string') ? item[3][1] : "#"} className="block w-full md:inline md:w-min mr-2 mt-1">
              <Button variant="outline" className="w-full md:w-min">
                <i className="bi bi-box-arrow-up-right"></i>
                {item[3][2]}
              </Button>
            </Link>
        )}

        </AccordionContent>
      </AccordionItem>
  ));
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      //defaultValue={items[0][0]}
    >
    {listBody}
    </Accordion>
  )
}
