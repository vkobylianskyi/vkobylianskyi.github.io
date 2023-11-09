import * as React from "react";
import Grid from "@mui/material/Grid";
import SvgIcon from "@mui/material/SvgIcon";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import i18n from "i18next";

import { HeaderWrapper } from "./header.component.styles.ts";

interface HeaderProps {
    onDrawerToggle: () => void;
}

export default function Header(props: HeaderProps) {
    const { onDrawerToggle } = props;

    const [language, setLanguage] = React.useState("en");

    const handleChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
        i18n.changeLanguage(event.target.value);
    };

    return (
        <HeaderWrapper color="secondary" position="sticky" elevation={0}>
            <Toolbar>
                <Grid
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <Grid
                        sx={{
                            display: { sm: "none", xs: "block", flexGrow: 1 },
                        }}
                        item
                    >
                        <IconButton
                            color="secondary"
                            aria-label="open drawer"
                            onClick={onDrawerToggle}
                            edge="start"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid
                        sx={{
                            display: { sm: "block", xs: "none", flexGrow: 1 },
                        }}
                        item
                    >
                        <IconButton href="#">
                            <SvgIcon
                                fontSize="large"
                                sx={{
                                    width: 56,
                                    height: "auto",
                                    display: "block",
                                }}
                            >
                                <svg
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="1280"
                                    height="696"
                                    viewBox="0 0 1280 696"
                                >
                                    <path
                                        d="M0 0 C422.4 0 844.8 0 1280 0 C1280 229.68 1280 459.36 1280 696 C857.6 696 435.2 696 0 696 C0 466.32 0 236.64 0 0 Z "
                                        fill="transparent"
                                        transform="translate(0,0)"
                                    />
                                    <path
                                        d="M0 0 C36.34959494 -0.04575964 72.69918485 -0.08101016 109.04880266 -0.10213066 C113.33844335 -0.10463213 117.628084 -0.10722077 121.91772461 -0.10986328 C123.19873102 -0.11065021 123.19873102 -0.11065021 124.50561634 -0.11145304 C138.34061395 -0.12015995 152.17559496 -0.1359315 166.01058271 -0.15430559 C180.20243155 -0.17299669 194.3942717 -0.18411505 208.58613235 -0.18817699 C217.34601326 -0.19092369 226.10584727 -0.1996046 234.86571375 -0.21583293 C240.86949887 -0.22639006 246.87325968 -0.22960351 252.8770534 -0.22700275 C256.34293606 -0.22571948 259.80873666 -0.22771174 263.2746048 -0.23841095 C267.03015648 -0.24831849 270.78550531 -0.24598408 274.5410614 -0.24050903 C275.63930841 -0.24633472 276.73755541 -0.2521604 277.86908263 -0.25816262 C278.87528901 -0.25418052 279.88149538 -0.25019842 280.91819286 -0.24609566 C282.21854513 -0.24723482 282.21854513 -0.24723482 283.54516715 -0.24839699 C286.35450348 0.03587112 288.47281417 0.7508443 291 2 C292.18835326 4.37670651 292.12512982 5.80774255 292.12534916 8.45994955 C292.12785268 9.40594302 292.1303562 10.35193648 292.13293558 11.32659641 C292.13059442 12.37511149 292.12825325 13.42362657 292.12584114 14.50391483 C292.12729458 15.61518444 292.12874802 16.72645404 292.13024551 17.87139848 C292.13392954 21.63962589 292.13040802 25.40781345 292.12698364 29.17604065 C292.12758001 31.8870487 292.12968053 34.59805511 292.13171089 37.30906242 C292.13533343 43.22624397 292.13520637 49.1434164 292.13266373 55.06059837 C292.12889306 63.85936473 292.13080881 72.65812336 292.13387203 81.45688966 C292.1391478 97.16797392 292.13867742 112.87905413 292.13579312 128.59013878 C292.13328146 142.33822444 292.13261904 156.08630861 292.13381577 169.83439445 C292.13393034 171.2002153 292.13393034 171.2002153 292.13404724 172.59362849 C292.13435855 176.289459 292.13467695 179.98528951 292.135007 183.68112001 C292.13806862 218.37761969 292.13528834 253.07411678 292.1299101 287.77061606 C292.12516381 318.62499218 292.12558916 349.47936416 292.13037109 380.33374023 C292.13572065 414.96669434 292.13785193 449.59964616 292.13475883 484.23260063 C292.13443809 487.92154086 292.13412525 491.61048108 292.13381577 495.29942131 C292.13373669 496.20779075 292.13365761 497.11616019 292.13357614 498.05205598 C292.13243661 511.79526433 292.13377275 525.53847103 292.13629532 539.28167915 C292.13914784 554.90081382 292.13845416 570.51994378 292.13301457 586.13907785 C292.13006767 594.89049229 292.12990184 603.64189655 292.13366075 612.39331074 C292.13589139 618.22796402 292.13452901 624.06260908 292.13015598 629.89726114 C292.12776127 633.22890393 292.12753708 636.56050954 292.13056196 639.8921544 C292.13356242 643.46876513 292.13052515 647.04531868 292.12584114 650.62192631 C292.12818231 651.67278255 292.13052347 652.7236388 292.13293558 653.80633917 C292.13043207 654.74982912 292.12792855 655.69331906 292.12534916 656.66539961 C292.12524753 657.89424566 292.12524753 657.89424566 292.12514383 659.14791689 C292 661 292 661 291 662 C289.04524397 662.10104406 287.08678868 662.1307737 285.12942505 662.13371277 C283.21543915 662.14011024 283.21543915 662.14011024 281.26278687 662.14663696 C279.83551022 662.1462874 278.40823361 662.14582584 276.98095703 662.14526367 C275.48815832 662.14825356 273.99536038 662.15165569 272.50256348 662.15544128 C268.43643112 662.16430354 264.37031979 662.16662035 260.30417871 662.16725707 C256.9144213 662.16820447 253.52466884 662.17188087 250.13491333 662.17542917 C242.13925609 662.18358244 234.14361013 662.18601263 226.14794922 662.18530273 C217.89040352 662.18470194 209.63292315 662.19525214 201.37539399 662.2110464 C194.29512763 662.22410807 187.21488265 662.2294872 180.13460433 662.22884732 C175.90184797 662.2285919 171.66914959 662.23146735 167.43640518 662.24202538 C163.45558322 662.25168314 159.47487496 662.25180158 155.49404907 662.24450874 C154.03110463 662.24345995 152.5681532 662.24584319 151.10522079 662.2518692 C149.11167548 662.25955031 147.11809168 662.2537626 145.12454224 662.24723816 C144.00770617 662.24778293 142.89087009 662.24832769 141.74019051 662.24888897 C139 662 139 662 136 660 C135.6999375 657.37948656 135.59877077 654.99392607 135.62361908 652.37031555 C135.61936796 651.56973473 135.61511685 650.7691539 135.61073691 649.94431305 C135.60003775 647.23264531 135.6109011 644.52147695 135.62145996 641.80981445 C135.61817248 639.85750924 135.61356123 637.90520588 135.6077323 635.95290661 C135.59545814 630.56497517 135.60191574 625.17719993 135.61123729 619.78926849 C135.61800727 613.98657564 135.60751426 608.18391244 135.59895325 602.38122559 C135.58635857 592.31595651 135.58442359 582.2507304 135.58930969 572.18545532 C135.59610649 557.61300953 135.58367089 543.04062082 135.56580251 528.46818769 C135.55750471 521.67936938 135.55016836 514.89055002 135.54308319 508.10173035 C135.54237269 507.42198914 135.5416622 506.74224793 135.54093017 506.04190851 C135.52423051 489.85085874 135.51695231 473.65980685 135.51123047 457.46875 C135.51097656 456.76012431 135.51072266 456.05149863 135.51046105 455.32139944 C135.50661268 444.54759973 135.50325327 433.7737999 135.5 423 C135.49653773 411.5390624 135.49289024 400.07812489 135.48876953 388.6171875 C135.48851924 387.91137508 135.48826896 387.20556266 135.48801108 386.47836198 C135.4822402 370.34788964 135.4737666 354.21742477 135.45691681 338.08695984 C135.45620854 337.40787472 135.45550028 336.72878961 135.45477055 336.02912616 C135.4476357 329.24671744 135.44003304 322.46430941 135.43173284 315.68190202 C135.41324327 300.48470345 135.40518666 285.28756882 135.41259348 270.09035957 C135.41678311 260.12261476 135.41038981 250.15491265 135.39579475 240.18717778 C135.3877612 234.44124232 135.38458417 228.69541283 135.39461708 222.94947815 C135.40374322 217.67854067 135.39888753 212.40779929 135.38340265 207.13687837 C135.3802388 205.2402659 135.38203054 203.34363652 135.38956803 201.44703639 C135.4467866 185.93095937 133.86166034 170.95793874 129.5 156 C129.25499756 155.15244141 129.00999512 154.30488281 128.75756836 153.43164062 C122.4098578 132.53215627 113.1407299 112.44275457 100 95 C98.82556765 93.33879635 97.65870013 91.67221497 96.5 90 C93.34131419 85.45757797 90.08371846 80.99335479 86.796875 76.54296875 C85 74 85 74 83.65625 71.6015625 C81.40880425 68.07137649 78.63242078 65.20692574 75.75 62.1875 C74.56678152 60.93316529 73.38448041 59.67796455 72.203125 58.421875 C71.64173828 57.82568359 71.08035156 57.22949219 70.50195312 56.61523438 C68.78190112 54.76545153 67.13150028 52.86563669 65.5 50.9375 C52.26754773 35.75909887 37.74196929 24.73865054 20.046875 15.22265625 C16.16288683 13.12313102 12.52367388 10.77417467 8.90234375 8.25 C5.75105936 6.17934085 2.40557128 4.60990642 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z "
                                        fill="#ff8c05"
                                        transform="translate(517,18)"
                                    />
                                    <path
                                        d="M0 0 C10.8764398 -0.0836668 21.75271712 -0.1490029 32.62942505 -0.18435669 C35.92476294 -0.19542559 39.21995705 -0.21327511 42.51522827 -0.23690796 C46.36304556 -0.2639997 50.21062834 -0.27652817 54.05853844 -0.27732277 C55.45400595 -0.27994243 56.84947487 -0.28760608 58.24488258 -0.30078697 C60.13646816 -0.31775895 62.02820469 -0.31422185 63.91986084 -0.30963135 C64.97235016 -0.31327698 66.02483948 -0.31692261 67.10922241 -0.32067871 C70.40956238 0.10529256 72.27642142 1.10773936 74.95648193 3.04681396 C76.45111084 5.05780029 76.45111084 5.05780029 77.68304443 7.37884521 C78.38590576 8.68317505 78.38590576 8.68317505 79.10296631 10.01385498 C79.83483154 11.42235718 79.83483154 11.42235718 80.58148193 12.85931396 C81.10290771 13.83763184 81.6243335 14.81594971 82.16156006 15.82391357 C86.18867517 23.4307542 90.01266598 31.13605801 93.80828857 38.86029053 C96.97965843 45.25642605 100.41700702 51.44689213 104.01898193 57.60931396 C108.53919703 65.35338879 112.54275648 73.221957 116.32806396 81.34783936 C119.23997511 87.5882251 122.33494072 93.6914163 125.57855225 99.76483154 C128.56909689 105.38032164 131.49453338 111.02646607 134.39007568 116.69134521 C134.78827515 117.47038712 135.18647461 118.24942902 135.59674072 119.05207825 C136.42214764 120.66720142 137.24752562 122.28233938 138.07287598 123.89749146 C145.03806374 137.52133928 152.1215447 151.05698295 159.52288818 164.45013428 C169.94805434 183.33332012 179.83800992 202.46813497 189.61004639 221.69549561 C194.54558371 231.4023187 199.52963756 241.07831466 204.62002563 250.70492554 C207.44277075 256.04940994 210.1775702 261.42886955 212.83148193 266.85931396 C216.78241413 274.84883647 220.98254057 282.67822048 225.28411865 290.48358154 C229.69295771 298.50430417 233.91175643 306.61600887 238.10906982 314.7489624 C241.54376501 321.3847833 245.0834738 327.94981676 248.70648193 334.48431396 C254.33732719 344.65821676 259.47818154 355.05757275 264.628479 365.47943115 C269.2104854 374.7378137 273.94775727 383.80385354 279.26605225 392.66668701 C283.32977982 399.49892705 286.64906536 406.62150931 289.97991943 413.83197021 C291.91105353 417.9990098 294.06239205 422.00440469 296.31195068 426.00775146 C298.55544636 430.15368885 300.62023615 434.3825824 302.70648193 438.60931396 C310.66615156 454.70266469 310.66615156 454.70266469 319.95648193 470.04681396 C320.8549486 476.75075752 318.2736665 481.65652216 315.45648193 487.54681396 C314.99942871 488.52658203 314.54237549 489.5063501 314.07147217 490.51580811 C311.24182852 496.52294174 308.25491133 502.41221569 305.059021 508.23260498 C302.06713646 513.7194495 299.38086235 519.33703739 296.70648193 524.98431396 C292.88447134 533.05492558 288.97289667 541.07113916 284.95648193 549.04681396 C278.34884072 562.18516396 271.92463879 575.41480323 265.77288818 588.77337646 C265.43160889 589.51080078 265.09032959 590.2482251 264.7387085 591.00799561 C264.13461115 592.31702528 263.53541572 593.62834233 262.94378662 594.9430542 C260.97620426 599.20709928 258.70501697 603.23050255 256.33538818 607.28509521 C251.08011186 616.32843088 246.61431941 625.75233949 242.08148193 635.17181396 C241.21996116 636.95328572 240.35798451 638.73453708 239.49554443 640.51556396 C237.61427697 644.40147642 235.7373304 648.289441 233.86447144 652.17941284 C232.90983675 654.14274599 231.93621391 656.09589999 230.95648193 658.04681396 C228.76898193 658.04681396 228.76898193 658.04681396 225.95648193 657.04681396 C221.59017816 651.58352148 218.70766317 644.78911975 215.64398193 638.54681396 C214.7521622 636.7446775 213.86023205 634.94259568 212.96820068 633.14056396 C212.24600342 631.67719604 212.24600342 631.67719604 211.50921631 630.18426514 C209.53202563 626.18915862 207.53751609 622.20281552 205.54231262 618.21669006 C202.94755717 613.03148504 200.35809053 607.84365942 197.77072239 602.65476418 C195.20982123 597.51905851 192.6472316 592.38419714 190.08384609 587.24973106 C188.41776301 583.91236054 186.75243819 580.57461605 185.08880615 577.23602295 C183.44744793 573.9422225 181.80397897 570.64948235 180.15920639 567.35738564 C179.25748229 565.55128544 178.35780027 563.74416613 177.45822144 561.93699646 C174.6151465 556.25047251 171.72805989 550.59502939 168.74304008 544.98162556 C161.00094546 530.41200547 153.69020552 515.62484776 146.32910538 500.86052322 C144.31494341 496.82206601 142.29808305 492.78495692 140.28143311 488.7477417 C134.73814643 477.64923202 129.19891362 466.54870038 123.65974426 455.44813538 C118.57455428 445.25745753 113.48846023 435.06723341 108.39910221 424.87863636 C106.40235796 420.88102848 104.40645517 416.88300543 102.41262817 412.88394165 C91.38123433 390.73249853 91.38123433 390.73249853 79.93743896 368.79217529 C77.32536384 363.89219762 74.87365042 358.9147497 72.42913818 353.92962646 C71.06051071 351.14429481 71.06051071 351.14429481 69.66741943 348.99945068 C67.21388147 344.76527715 65.19241217 340.34729963 63.10882568 335.92181396 C57.30630717 323.6963261 51.29881951 311.57855151 45.23797607 299.47943115 C43.49332798 295.99558622 41.75306435 292.50957387 40.01312256 289.02337646 C38.89163479 286.78106039 37.76989946 284.53886813 36.64788818 282.29681396 C35.8775399 280.75308105 35.8775399 280.75308105 35.09162903 279.17816162 C34.60689621 278.21184814 34.12216339 277.24553467 33.6227417 276.24993896 C33.20291519 275.41108154 32.78308868 274.57222412 32.35054016 273.70794678 C30.96066875 271.05480623 29.47448703 268.4672769 27.98029995 265.87194824 C26.30796939 262.89072718 24.79656812 259.83002619 23.28460693 256.76556396 C22.57960695 255.34625432 21.87452561 253.92698507 21.16937256 252.50775146 C20.8059375 251.77459717 20.44250244 251.04144287 20.0680542 250.28607178 C18.22171235 246.56662362 16.36184665 242.8539527 14.50335693 239.14056396 C13.72106458 237.57614374 12.93883938 236.01168993 12.15667725 234.44720459 C11.75759155 233.6490332 11.35850586 232.85086182 10.94732666 232.02850342 C-14.24371338 181.64642334 -14.24371338 181.64642334 -15.4294281 179.27471924 C-16.19452534 177.74470576 -16.95990951 176.21483571 -17.7256012 174.68511963 C-19.58710179 170.96532254 -21.44329598 167.24304513 -23.28936768 163.51556396 C-23.64996277 162.7892981 -24.01055786 162.06303223 -24.38208008 161.3147583 C-25.05695522 159.95510477 -25.73006991 158.59457528 -26.40100098 157.23297119 C-28.14522983 153.72365366 -30.00583228 150.35507791 -32.10601807 147.04681396 C-34.50825112 143.16864956 -36.34752338 139.16747244 -38.11383057 134.97259521 C-41.9358345 126.07950263 -46.2139985 117.4364741 -50.56719971 108.79364014 C-51.84839841 106.24944503 -53.12320933 103.70212977 -54.39703369 101.15423584 C-59.02710706 91.91488069 -63.74167025 82.72639382 -68.61061096 73.6103363 C-71.4190388 68.32872794 -74.02054108 62.97007747 -76.54351807 57.54681396 C-80.68944956 48.67677705 -85.17579755 40.02084443 -89.79400635 31.38861084 C-91.06134971 29.01339444 -92.31773332 26.63268232 -93.57086182 24.24993896 C-94.17897705 23.0948584 -94.17897705 23.0948584 -94.79937744 21.91644287 C-95.56298451 20.46590498 -96.32604378 19.01507851 -97.08843994 17.56390381 C-98.58923838 14.7229064 -100.09697618 11.96208345 -101.81304932 9.24212646 C-103.04351807 7.04681396 -103.04351807 7.04681396 -102.79351807 4.29681396 C-102.04351807 2.04681396 -102.04351807 2.04681396 -101.04351807 1.04681396 C-98.49271863 0.92129853 -95.96776456 0.86067833 -93.41534424 0.8414917 C-92.60922007 0.83160343 -91.80309589 0.82171516 -90.97254372 0.81152725 C-88.26055545 0.77961951 -85.54855093 0.75496347 -82.83648682 0.73040771 C-80.91376878 0.7095816 -78.99105457 0.68840012 -77.06834412 0.66688538 C-71.86931538 0.61039968 -66.67024381 0.56092571 -61.47112274 0.51377869 C-58.24363862 0.48442873 -55.0161672 0.45392258 -51.78869629 0.42315674 C-37.58963858 0.28897057 -23.39047825 0.1741533 -9.19116974 0.07012177 C-6.1274408 0.0474354 -3.06372012 0.02384446 0 0 Z "
                                        fill="#ff8c05"
                                        transform="translate(132.04351806640625,18.95318603515625)"
                                    />
                                    <path
                                        d="M0 0 C3.95994916 2.0672277 5.89643256 3.89959553 8.125 7.75 C10.98161852 12.45319622 14.0353577 16.8996692 17.3125 21.3125 C18.26310374 22.59499064 19.21362408 23.87754309 20.1640625 25.16015625 C20.87224121 26.11559326 20.87224121 26.11559326 21.59472656 27.09033203 C23.82460908 30.12058586 26.00744468 33.18379491 28.1875 36.25 C31.16424034 40.43410996 34.158883 44.60312442 37.1875 48.75 C39.6303143 52.09485152 42.0234285 55.4654954 44.375 58.875 C47.40677925 63.23147559 50.61991374 67.42409428 53.87963867 71.61181641 C58.18958991 77.18142574 62.28540808 82.89989534 66.38867188 88.62255859 C69.06625974 92.34910659 71.76015557 96.03879187 74.625 99.625 C78.23469641 104.17945646 81.46549178 108.98219663 84.74047852 113.77905273 C91.32589009 123.42185649 98.0843828 132.89568647 105.25463867 142.11279297 C108.65968243 146.50823812 111.89424848 151.00975038 115.1027832 155.54980469 C118.38462092 160.17802097 121.76920052 164.72186993 125.1875 169.25 C128.96946213 174.26436014 132.6788711 179.30872693 136.25 184.4765625 C143.7756798 195.328324 151.58869878 205.98492337 159.32666016 216.68554688 C162.05263139 220.45593019 164.77621534 224.22803694 167.5 228 C168.58332144 229.50000859 169.66665479 231.00000858 170.75 232.5 C172.91666667 235.5 175.08333333 238.5 177.25 241.5 C178.05473755 242.6142334 178.05473755 242.6142334 178.87573242 243.75097656 C179.95667191 245.24768701 181.03756401 246.74443168 182.1184082 248.24121094 C184.8629754 252.04182637 187.60841966 255.84180298 190.35546875 259.640625 C191.46617281 261.17706383 192.57685011 262.71352201 193.6875 264.25 C194.22930908 264.99918701 194.77111816 265.74837402 195.3293457 266.52026367 C197.79495482 269.93288828 200.25373404 273.34973213 202.6875 276.78515625 C207.01972414 282.90005805 211.43691154 288.91082104 216.03979492 294.82763672 C222.82363613 303.59343656 229.21340587 312.66222494 235.62890625 321.69921875 C241.01975046 329.29064747 246.53408993 336.77716553 252.140625 344.2109375 C252.61072998 344.83468262 253.08083496 345.45842773 253.56518555 346.10107422 C254.53233664 347.38106421 255.50262337 348.65869021 256.47583008 349.93408203 C260.23035191 354.88091409 263.72526215 359.97084236 267.1875 365.125 C271.29243397 371.17705519 275.48164113 377.12350733 280 382.875 C280.43207764 383.42687988 280.86415527 383.97875977 281.30932617 384.54736328 C284.55719379 388.61589802 287.86056098 392.67007844 292.3125 395.4375 C293.1478125 396.2109375 293.1478125 396.2109375 294 397 C294.0680564 398.99884175 294.07263039 401.00131923 294 403 C278.93946293 403.13300144 263.878905 403.26344059 248.81832218 403.39115143 C241.8190567 403.45055821 234.81979925 403.51070571 227.82055664 403.57275391 C225.10498109 403.59675064 222.38940492 403.62067592 219.67382812 403.64453125 C219.00275615 403.65042707 218.33168417 403.6563229 217.64027667 403.66239738 C206.26836004 403.76178367 194.89639274 403.84312389 183.52427101 403.91566467 C175.98380336 403.96562947 168.44402463 404.03789878 160.90396595 404.1306839 C156.33494383 404.18353947 151.76589035 404.22022778 147.19668388 404.25291443 C145.0898129 404.27156705 142.9829904 404.29723003 140.8762989 404.33045959 C137.99994849 404.37499708 135.12444161 404.39456593 132.24780273 404.40820312 C131.42087103 404.42725708 130.59393932 404.44631104 129.74194908 404.46594238 C123.19163936 404.45506495 118.07853983 402.58793587 113.0390625 398.3515625 C106.10460189 389.88462441 99.87413253 380.89602524 93.875 371.75 C90.83205574 367.13374988 87.53480596 362.86103946 84.03515625 358.5859375 C81.89116494 355.86171054 79.94411878 353.0575653 78 350.1875 C73.85489505 344.10320682 69.42677951 338.27140209 64.9375 332.4375 C60.05141867 326.07720854 55.32626958 319.72128019 50.9609375 312.9921875 C44.4393222 303.0408781 37.43639464 293.4585268 30.0625 284.125 C24.57419536 277.1769351 19.49289273 270.02952267 14.54541016 262.68847656 C10.94220583 257.34720404 7.19718145 252.18178241 3.2890625 247.05859375 C0.55347741 243.40336658 -2.06874957 239.67686769 -4.6875 235.9375 C-9.74983882 228.71450699 -14.94018638 221.59372133 -20.19213867 214.50756836 C-29.2088991 202.34143196 -29.2088991 202.34143196 -31.4375 198.5625 C-33.21023021 195.65522246 -35.20831985 193.00444158 -37.26953125 190.296875 C-39.17627679 187.76602539 -41.02532826 185.19782435 -42.875 182.625 C-45.38364264 179.15730943 -47.95932603 175.79678286 -50.6875 172.5 C-55.1944834 166.94611888 -59.13218539 161.02809921 -63.14013672 155.11157227 C-68.7233302 146.88767916 -74.57813807 138.94616458 -80.875 131.25 C-85.37550469 125.68051316 -89.36085437 119.78259804 -93.36328125 113.8515625 C-96.07005763 109.8516029 -98.9662336 106.00620776 -101.953125 102.2109375 C-103.43719773 99.0766645 -102.98683423 97.27939235 -102 94 C-100.43359375 91.91015625 -100.43359375 91.91015625 -98.4375 90.0625 C-97.33921875 89.03189453 -97.33921875 89.03189453 -96.21875 87.98046875 C-93.64365552 85.68192491 -91.05282574 83.40499737 -88.4375 81.15234375 C-85.21469116 78.30656223 -82.07659767 75.37504468 -78.9375 72.4375 C-77.977229 71.53898315 -77.977229 71.53898315 -76.99755859 70.62231445 C-74.99749615 68.74914195 -72.99854862 66.8747875 -71 65 C-55.96328194 50.89443816 -55.96328194 50.89443816 -49.98828125 45.73828125 C-38.12171869 35.36378156 -26.74580166 24.39239721 -15.3046875 13.5546875 C-14.53342529 12.82531982 -13.76216309 12.09595215 -12.9675293 11.34448242 C-11.47499457 9.93249567 -9.98420134 8.51866524 -8.49536133 7.1027832 C-7.82013428 6.46429443 -7.14490723 5.82580566 -6.44921875 5.16796875 C-5.85455811 4.60360107 -5.25989746 4.0392334 -4.6472168 3.45776367 C-3 2 -3 2 0 0 Z "
                                        fill="#ff8c05"
                                        transform="translate(986,277)"
                                    />
                                    <path
                                        d="M0 0 C1.20345723 0.00081715 1.20345723 0.00081715 2.43122673 0.00165081 C3.81871101 -0.0046447 3.81871101 -0.0046447 5.23422527 -0.01106739 C6.25732139 -0.00544537 7.2804175 0.00017666 8.33451653 0.00596905 C9.41628261 0.00409336 10.49804869 0.00221767 11.61259556 0.00028515 C15.26329808 -0.00341004 18.91381105 0.00746628 22.56449699 0.01842022 C25.17400918 0.01927885 27.78352173 0.01935708 30.39303398 0.01871014 C36.76460865 0.01898612 43.13611618 0.03066358 49.50766975 0.04630488 C54.68671696 0.05878486 59.86575349 0.06668576 65.04481316 0.07164288 C132.3838877 0.13803785 199.72052417 0.64880758 267.05668449 1.24888897 C267.66996574 3.10826397 267.66996574 3.10826397 268.05668449 5.24888897 C266.24418449 7.49888897 266.24418449 7.49888897 264.05668449 9.24888897 C263.39668449 9.24888897 262.73668449 9.24888897 262.05668449 9.24888897 C261.80402824 9.84830303 261.55137199 10.44771709 261.29105949 11.06529522 C259.89075206 13.54242134 258.61774412 14.54866438 256.30668449 16.18638897 C251.93682485 19.45495927 247.9652678 23.0174993 243.99418449 26.74888897 C239.73853138 30.74507163 235.47016567 34.69742872 231.04496574 38.50670147 C227.62031091 41.50747958 224.2983549 44.62221632 220.96293449 47.72154522 C218.74299547 49.65205671 216.55430166 51.3709957 214.18168449 53.09263897 C209.90126446 56.25798735 206.24977568 59.86501145 202.55668449 63.68638897 C198.92463031 67.42166996 195.30385469 71.08842683 191.33793449 74.47154522 C185.60512901 79.40990397 180.36871713 84.86799665 175.05668449 90.24888897 C163.31519796 102.14257996 163.31519796 102.14257996 156.97855949 107.54967022 C153.15769131 110.92787684 149.63081745 114.61376398 146.05668449 118.24888897 C141.79556914 122.58271961 137.56578761 126.87374066 132.93168449 130.81138897 C129.58307959 133.68734687 126.72773914 136.78569662 123.86967278 140.14293194 C120.54997542 143.99907379 117.03406513 147.65823215 113.49418449 151.31138897 C112.76521965 152.09449444 112.03625481 152.87759991 111.28520012 153.68443584 C110.5691259 154.41855694 109.85305168 155.15267803 109.11527824 155.90904522 C108.47904533 156.5755711 107.84281242 157.24209698 107.18729973 157.92882061 C105.05668449 159.24888897 105.05668449 159.24888897 101.80302238 158.9576292 C100.44358513 158.60680279 100.44358513 158.60680279 99.05668449 158.24888897 C98.84576164 157.52524151 98.63483879 156.80159405 98.41752434 156.05601788 C95.99886147 147.77639551 93.54045569 139.50920233 91.05668449 131.24888897 C90.79049309 130.35556866 90.52430168 129.46224834 90.25004387 128.54185772 C84.52537708 109.52271682 75.61605912 92.55923646 64.95121574 75.86217022 C62.76335149 72.42685766 60.80639422 68.96253718 58.99418449 65.31138897 C55.20858885 58.10728575 49.4585015 52.26519338 44.05668449 46.24888897 C42.72112145 44.73001335 41.38732231 43.20958128 40.05668449 41.68638897 C39.52430168 41.08052959 38.99191887 40.47467022 38.44340324 39.85045147 C35.89816367 36.910879 33.51403037 33.85868347 31.18168449 30.74888897 C28.23467551 27.28181957 25.06002029 24.16469962 20.86918449 22.24888897 C19.05668449 21.24888897 19.05668449 21.24888897 18.00980949 19.03795147 C15.14259536 14.94356968 11.28478114 13.06607377 6.99418449 10.62388897 C5.35400612 9.67935045 3.71712217 8.72906172 2.08402824 7.77232647 C1.35949455 7.35902081 0.63496086 6.94571514 -0.1115284 6.51988506 C-1.94331551 5.24888897 -1.94331551 5.24888897 -3.94331551 2.24888897 C-1.94331551 0.24888897 -1.94331551 0.24888897 0 0 Z "
                                        fill="#ff8c05"
                                        transform="translate(970.9433155059814,16.751111030578613)"
                                    />
                                </svg>
                            </SvgIcon>
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Change theme">
                            <IconButton color="secondary">
                                <Brightness4Icon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                    <Grid item>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="language-select-label">
                                Language
                            </InputLabel>
                            <Select
                                labelId="language-select-label"
                                id="language-select"
                                value={language}
                                label="language"
                                onChange={handleChange}
                            >
                                <MenuItem value="en">English</MenuItem>
                                <MenuItem value="ua">Ukrainian</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
            </Toolbar>
        </HeaderWrapper>
    );
}
