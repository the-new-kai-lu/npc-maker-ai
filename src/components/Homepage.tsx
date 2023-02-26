import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {DefaultHomepageProps, PlasmicHomepage} from "./plasmic/d_d_npc_generator/PlasmicHomepage";
import {HTMLElementRefOf} from "@plasmicapp/react-web";
import {NPC} from "../models/npc";
import {build_single_npc} from "../services/build_npc";
import {formatInput, formatMultipleInput, GenerateData} from "../services/format_data";
import {toast, ToastContainer} from "react-toastify";
import {motion} from "framer-motion";

export interface HomepageProps extends DefaultHomepageProps {
  k: string,
}

let index = 0;

const SlideShowVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : direction < 0 ? -1000 : 0,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  }
};

function Homepage_(props: HomepageProps, ref: HTMLElementRefOf<"div">) {
  const rest = props as DefaultHomepageProps;
  const [npcArray, setNpcArray] = useState<NPC[] | undefined>(undefined);
  const [npc, setNpc] = useState<NPC | undefined>(undefined);
  const [loading, setLoading] = useState(false)
  const toastId = useRef<any>(null)
  const [dataStart, setDataStart] = useState<GenerateData[]>([])
  const [counter, setCounter] = useState(-1)
  const [[focusId, direction], setFocus] = useState([0, 0])

  useEffect(() => {
    if (npcArray != null && npcArray.length > 0) {
      setNpc(npcArray[0])
    }
  }, [npcArray])

  useEffect(() => {
    if (dataStart.length > 0) {
      setCounter(0)
      setLoading(true)
    }
  }, [dataStart])

  useEffect(() => {
    if (counter >= 0) {
      if (counter >= dataStart.length) {
        setCounter(-1)
        setDataStart([])
        toast.update(toastId.current, {render: 'All done!', autoClose: 5000, hideProgressBar: false})
        toastId.current = null
      } else {
        build_single_npc(dataStart[counter], props.k).then(result => {
          if (counter === 0) {
            setLoading(false)
            setNpcArray([result])
            toastId.current = toast(`Now generating: NPC ${counter+2}/${dataStart.length}`)
          } else {
            //@ts-ignore
            setNpcArray([...npcArray, result])
            toast.update(toastId.current, {render: `Now generating: NPC ${counter+2}/${dataStart.length}`, className: 'rotateY animated'})
          }
          setCounter(counter+1)
        })
      }
    }
  }, [counter])

  function setPrevNpc(): void {
    if (!npcArray) {
      return;
    }

    index--;
    if (index < 0) {
      index = npcArray.length - 1;
    }
    setFocus([index, -1])
    setNpc(npcArray[index]);
  }

  function setNextNpc(): void {
    if (!npcArray) {
      return;
    }

    index++;
    if (index >= npcArray.length) {
      index = 0;
    }
    setFocus([index, 1])
    setNpc(npcArray[index]);
  }

  return (<>
    <ToastContainer
      position='top-right'
      autoClose={false}
      hideProgressBar={true}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover={false}
      theme="light"
    />
    {loading && <div style={{width: '100%', height: '100%', zIndex: 5, backgroundColor: "#cfcfcf", opacity: 0.15, position: "absolute"}}><img src='tetris-game.gif' style={{left: '50%', bottom: '50%', right: '50%'}}/></div>}
      <PlasmicHomepage
      root={{ ref,  }}
      left={{
        props: {
          style: { opacity: npcArray && npcArray.length > 1 ? 1 : 0 },
          click: () => setPrevNpc()
        }
      }}
      right={{
        props: {
          style: { opacity: (npcArray != null && npcArray.length > 1) ? 1 : 0 },
          click: () => setNextNpc()
        }
      }}
      info={{
        wrap: (content) =>
            <motion.div
                style={{width: '100%', height: '100%'}}
                key={focusId}
                custom={direction}
                variants={SlideShowVariants}
                initial="enter"
                animate="center"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
            >{content}</motion.div>,
        props: { npc: npc }
      }}
      generateSelector={{
        props: {
          generateButtonClick: (data) => {
            if (data.tavern) {
              setNpc(undefined)
              setNpcArray(undefined)
              const res = formatMultipleInput(data.input)
              setDataStart(res)
            } else {
              setNpc(undefined)
              setNpcArray(undefined)
              setLoading(true)
              build_single_npc(formatInput(data.input), props.k).then(npc => {setNpc(npc);setLoading(false)})
            }
          }
        }
      }}
      download={{
        onClick: () => {
          if (npc != null) {
            const bb = new Blob([JSON.stringify(npc)], {type: 'application/json'})
            const a = document.createElement('a')
            a.download = 'download.json'
            a.href = window.URL.createObjectURL(bb)
            a.click()
          } else if (npcArray != null) {
            const bb = new Blob([JSON.stringify(npcArray)], {type: 'application/json'})
            const a = document.createElement('a')
            a.download = 'download.json'
            a.href = window.URL.createObjectURL(bb)
            a.click()
          }
        }
      }}
      {...rest}
    />
  </>);
}

const Homepage = React.forwardRef(Homepage_);
export default Homepage;
