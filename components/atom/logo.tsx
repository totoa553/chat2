import { FC } from "react";
import { themeColor } from "./styles";

const TitleLogo:FC = () => {
    const fillColor = {
        chachat: themeColor.textGray,
        chat: themeColor.main,
        sento: themeColor.textBlack,
        ikanto: themeColor.textGray,
    }
    return (
        <svg viewBox="0 0 500 400">
            <g fill={ fillColor.chachat }>
                <path d="M57.5458+44.0526C54.1005+39.8473+49.8445+37.7446+44.7778+37.7446C42.5485+37.7446+40.4838+38.15+38.5838+38.9606C36.6838+39.7713+35.0498+40.8733+33.6818+42.2666C32.3138+43.66+31.2372+45.3193+30.4518+47.2446C29.6665+49.17+29.2738+51.2473+29.2738+53.4766C29.2738+55.7566+29.6665+57.8593+30.4518+59.7846C31.2372+61.71+32.3265+63.382+33.7198+64.8006C35.1132+66.2193+36.7472+67.334+38.6218+68.1446C40.4965+68.9553+42.5232+69.3606+44.7018+69.3606C49.4645+69.3606+53.7458+67.334+57.5458+63.2806L57.5458+80.9126L56.0258+81.4446C53.7458+82.2553+51.6178+82.8506+49.6418+83.2306C47.6658+83.6106+45.7152+83.8006+43.7898+83.8006C39.8378+83.8006+36.0505+83.0533+32.4278+81.5586C28.8052+80.064+25.6132+77.9613+22.8518+75.2506C20.0905+72.54+17.8738+69.3226+16.2018+65.5986C14.5298+61.8746+13.6938+57.8086+13.6938+53.4006C13.6938+48.9926+14.5172+44.952+16.1638+41.2786C17.8105+37.6053+20.0145+34.4386+22.7758+31.7786C25.5372+29.1186+28.7418+27.0413+32.3898+25.5466C36.0378+24.052+39.8632+23.3046+43.8658+23.3046C46.1458+23.3046+48.3878+23.5453+50.5918+24.0266C52.7958+24.508+55.1138+25.2553+57.5458+26.2686L57.5458+44.0526Z" opacity="1" />
                <path d="M83.1504+47.0166L104.658+47.0166L104.658+24.9006L119.554+24.9006L119.554+82.2046L104.658+82.2046L104.658+58.5686L83.1504+58.5686L83.1504+82.2046L68.2544+82.2046L68.2544+24.9006L83.1504+24.9006L83.1504+47.0166Z" opacity="1" />
                <path d="M161.575+60.9246L154.887+41.8486L148.199+60.9246L161.575+60.9246ZM165.527+72.2486L144.247+72.2486L140.827+82.2046L124.943+82.2046L146.755+24.9006L163.019+24.9006L184.831+82.2046L168.947+82.2046L165.527+72.2486Z" opacity="1" />
                <path d="M187.788+56.1366L209.6+56.1366L209.6+67.6126L187.788+67.6126L187.788+56.1366Z" opacity="1" />
                <path d="M255.724+44.0526C252.279+39.8473+248.023+37.7446+242.956+37.7446C240.727+37.7446+238.662+38.15+236.762+38.9606C234.862+39.7713+233.228+40.8733+231.86+42.2666C230.492+43.66+229.415+45.3193+228.63+47.2446C227.845+49.17+227.452+51.2473+227.452+53.4766C227.452+55.7566+227.845+57.8593+228.63+59.7846C229.415+61.71+230.505+63.382+231.898+64.8006C233.291+66.2193+234.925+67.334+236.8+68.1446C238.675+68.9553+240.701+69.3606+242.88+69.3606C247.643+69.3606+251.924+67.334+255.724+63.2806L255.724+80.9126L254.204+81.4446C251.924+82.2553+249.796+82.8506+247.82+83.2306C245.844+83.6106+243.893+83.8006+241.968+83.8006C238.016+83.8006+234.229+83.0533+230.606+81.5586C226.983+80.064+223.791+77.9613+221.03+75.2506C218.269+72.54+216.052+69.3226+214.38+65.5986C212.708+61.8746+211.872+57.8086+211.872+53.4006C211.872+48.9926+212.695+44.952+214.342+41.2786C215.989+37.6053+218.193+34.4386+220.954+31.7786C223.715+29.1186+226.92+27.0413+230.568+25.5466C234.216+24.052+238.041+23.3046+242.044+23.3046C244.324+23.3046+246.566+23.5453+248.77+24.0266C250.974+24.508+253.292+25.2553+255.724+26.2686L255.724+44.0526Z" opacity="1" />
                <path d="M281.329+47.0166L302.837+47.0166L302.837+24.9006L317.733+24.9006L317.733+82.2046L302.837+82.2046L302.837+58.5686L281.329+58.5686L281.329+82.2046L266.433+82.2046L266.433+24.9006L281.329+24.9006L281.329+47.0166Z" opacity="1" />
                <path d="M359.753+60.9246L353.065+41.8486L346.377+60.9246L359.753+60.9246ZM363.705+72.2486L342.425+72.2486L339.005+82.2046L323.121+82.2046L344.933+24.9006L361.197+24.9006L383.009+82.2046L367.125+82.2046L363.705+72.2486Z" opacity="1" />
                <path d="M407.626+37.5166L407.626+82.2046L392.73+82.2046L392.73+37.5166L380.494+37.5166L380.494+24.9006L419.862+24.9006L419.862+37.5166L407.626+37.5166Z" opacity="1" fill={ themeColor.main }/>
                <path d="M437.79+53.5526C437.79+55.8326+438.221+57.9353+439.082+59.8606C439.944+61.786+441.109+63.458+442.578+64.8766C444.048+66.2953+445.758+67.3973+447.708+68.1826C449.659+68.968+451.724+69.3606+453.902+69.3606C456.081+69.3606+458.146+68.968+460.096+68.1826C462.047+67.3973+463.77+66.2953+465.264+64.8766C466.759+63.458+467.937+61.786+468.798+59.8606C469.66+57.9353+470.09+55.8326+470.09+53.5526C470.09+51.2726+469.66+49.17+468.798+47.2446C467.937+45.3193+466.759+43.6473+465.264+42.2286C463.77+40.81+462.047+39.708+460.096+38.9226C458.146+38.1373+456.081+37.7446+453.902+37.7446C451.724+37.7446+449.659+38.1373+447.708+38.9226C445.758+39.708+444.048+40.81+442.578+42.2286C441.109+43.6473+439.944+45.3193+439.082+47.2446C438.221+49.17+437.79+51.2726+437.79+53.5526ZM422.21+53.5526C422.21+49.2966+422.996+45.332+424.566+41.6586C426.137+37.9853+428.316+34.7806+431.102+32.0446C433.889+29.3086+437.22+27.168+441.096+25.6226C444.972+24.0773+449.241+23.3046+453.902+23.3046C458.513+23.3046+462.769+24.0773+466.67+25.6226C470.572+27.168+473.928+29.3086+476.74+32.0446C479.552+34.7806+481.744+37.9853+483.314+41.6586C484.885+45.332+485.67+49.2966+485.67+53.5526C485.67+57.8086+484.885+61.7733+483.314+65.4466C481.744+69.12+479.552+72.3246+476.74+75.0606C473.928+77.7966+470.572+79.9373+466.67+81.4826C462.769+83.028+458.513+83.8006+453.902+83.8006C449.241+83.8006+444.972+83.028+441.096+81.4826C437.22+79.9373+433.889+77.7966+431.102+75.0606C428.316+72.3246+426.137+69.12+424.566+65.4466C422.996+61.7733+422.21+57.8086+422.21+53.5526Z" opacity="1" fill={ themeColor.main }/>
            </g>
            <g fill={ fillColor.chat }>
                <path d="M156.635+145.057C153.19+140.851+148.934+138.749+143.867+138.749C141.638+138.749+139.573+139.154+137.673+139.965C135.773+140.775+134.139+141.877+132.771+143.271C131.403+144.664+130.326+146.323+129.541+148.249C128.756+150.174+128.363+152.251+128.363+154.481C128.363+156.761+128.756+158.863+129.541+160.789C130.326+162.714+131.416+164.386+132.809+165.805C134.202+167.223+135.836+168.338+137.711+169.149C139.586+169.959+141.612+170.365+143.791+170.365C148.554+170.365+152.835+168.338+156.635+164.285L156.635+181.917L155.115+182.449C152.835+183.259+150.707+183.855+148.731+184.235C146.755+184.615+144.804+184.805+142.879+184.805C138.927+184.805+135.14+184.057+131.517+182.563C127.894+181.068+124.702+178.965+121.941+176.255C119.18+173.544+116.963+170.327+115.291+166.603C113.619+162.879+112.783+158.813+112.783+154.405C112.783+149.997+113.606+145.956+115.253+142.283C116.9+138.609+119.104+135.443+121.865+132.783C124.626+130.123+127.831+128.045+131.479+126.551C135.127+125.056+138.952+124.309+142.955+124.309C145.235+124.309+147.477+124.549+149.681+125.031C151.885+125.512+154.203+126.259+156.635+127.273L156.635+145.057Z" opacity="1" />
                <path d="M182.24+148.021L203.748+148.021L203.748+125.905L218.644+125.905L218.644+183.209L203.748+183.209L203.748+159.573L182.24+159.573L182.24+183.209L167.344+183.209L167.344+125.905L182.24+125.905L182.24+148.021Z" opacity="1" />
                <path d="M260.664+161.929L253.976+142.853L247.288+161.929L260.664+161.929ZM264.616+173.253L243.336+173.253L239.916+183.209L224.032+183.209L245.844+125.905L262.108+125.905L283.92+183.209L268.036+183.209L264.616+173.253Z" opacity="1" />
                <path d="M308.537+138.521L308.537+183.209L293.641+183.209L293.641+138.521L281.405+138.521L281.405+125.905L320.773+125.905L320.773+138.521L308.537+138.521Z" opacity="1" fill={ themeColor.main }/>
                <path d="M338.701+154.557C338.701+156.837+339.132+158.939+339.993+160.865C340.855+162.79+342.02+164.462+343.489+165.881C344.959+167.299+346.669+168.401+348.619+169.187C350.57+169.972+352.635+170.365+354.813+170.365C356.992+170.365+359.057+169.972+361.007+169.187C362.958+168.401+364.681+167.299+366.175+165.881C367.67+164.462+368.848+162.79+369.709+160.865C370.571+158.939+371.001+156.837+371.001+154.557C371.001+152.277+370.571+150.174+369.709+148.249C368.848+146.323+367.67+144.651+366.175+143.233C364.681+141.814+362.958+140.712+361.007+139.927C359.057+139.141+356.992+138.749+354.813+138.749C352.635+138.749+350.57+139.141+348.619+139.927C346.669+140.712+344.959+141.814+343.489+143.233C342.02+144.651+340.855+146.323+339.993+148.249C339.132+150.174+338.701+152.277+338.701+154.557ZM323.121+154.557C323.121+150.301+323.907+146.336+325.477+142.663C327.048+138.989+329.227+135.785+332.013+133.049C334.8+130.313+338.131+128.172+342.007+126.627C345.883+125.081+350.152+124.309+354.813+124.309C359.424+124.309+363.68+125.081+367.581+126.627C371.483+128.172+374.839+130.313+377.651+133.049C380.463+135.785+382.655+138.989+384.225+142.663C385.796+146.336+386.581+150.301+386.581+154.557C386.581+158.813+385.796+162.777+384.225+166.451C382.655+170.124+380.463+173.329+377.651+176.065C374.839+178.801+371.483+180.941+367.581+182.487C363.68+184.032+359.424+184.805+354.813+184.805C350.152+184.805+345.883+184.032+342.007+182.487C338.131+180.941+334.8+178.801+332.013+176.065C329.227+173.329+327.048+170.124+325.477+166.451C323.907+162.777+323.121+158.813+323.121+154.557Z" opacity="1" fill={ themeColor.main }/>
            </g>
            <g fill={ fillColor.sento }>
                <path d="M153.443+241.577C151.822+240.259+150.2+239.284+148.579+238.651C146.958+238.017+145.387+237.701+143.867+237.701C141.942+237.701+140.371+238.157+139.155+239.069C137.939+239.981+137.331+241.171+137.331+242.641C137.331+243.654+137.635+244.49+138.243+245.149C138.851+245.807+139.649+246.377+140.637+246.859C141.625+247.34+142.74+247.758+143.981+248.113C145.222+248.467+146.451+248.847+147.667+249.253C152.531+250.874+156.09+253.04+158.345+255.751C160.6+258.461+161.727+261.995+161.727+266.353C161.727+269.291+161.233+271.951+160.245+274.333C159.257+276.714+157.813+278.753+155.913+280.451C154.013+282.148+151.682+283.465+148.921+284.403C146.16+285.34+143.031+285.809+139.535+285.809C132.29+285.809+125.576+283.655+119.395+279.349L125.779+267.341C128.008+269.317+130.212+270.786+132.391+271.749C134.57+272.711+136.723+273.193+138.851+273.193C141.283+273.193+143.094+272.635+144.285+271.521C145.476+270.406+146.071+269.139+146.071+267.721C146.071+266.859+145.919+266.112+145.615+265.479C145.311+264.845+144.804+264.263+144.095+263.731C143.386+263.199+142.461+262.705+141.321+262.249C140.181+261.793+138.8+261.286+137.179+260.729C135.254+260.121+133.366+259.449+131.517+258.715C129.668+257.98+128.021+257.005+126.577+255.789C125.133+254.573+123.968+253.04+123.081+251.191C122.194+249.341+121.751+246.998+121.751+244.161C121.751+241.323+122.22+238.752+123.157+236.447C124.094+234.141+125.412+232.165+127.109+230.519C128.806+228.872+130.884+227.593+133.341+226.681C135.798+225.769+138.547+225.313+141.587+225.313C144.424+225.313+147.388+225.705+150.479+226.491C153.57+227.276+156.534+228.429+159.371+229.949L153.443+241.577Z" opacity="1" />
                <path d="M202.532+239.525L184.824+239.525L184.824+249.101L201.544+249.101L201.544+261.717L184.824+261.717L184.824+271.597L202.532+271.597L202.532+284.213L169.928+284.213L169.928+226.909L202.532+226.909L202.532+239.525Z" opacity="1" />
                <path d="M212.1+284.213L212.1+226.909L226.996+226.909L254.508+261.945L254.508+226.909L269.328+226.909L269.328+284.213L254.508+284.213L226.996+249.177L226.996+284.213L212.1+284.213Z" opacity="1" />
                <path d="M301.925+239.525L301.925+284.213L287.029+284.213L287.029+239.525L274.793+239.525L274.793+226.909L314.161+226.909L314.161+239.525L301.925+239.525Z" opacity="1" fill={ themeColor.main }/>
                <path d="M332.089+255.561C332.089+257.841+332.52+259.943+333.381+261.869C334.243+263.794+335.408+265.466+336.877+266.885C338.347+268.303+340.057+269.405+342.007+270.191C343.958+270.976+346.023+271.369+348.201+271.369C350.38+271.369+352.445+270.976+354.395+270.191C356.346+269.405+358.069+268.303+359.563+266.885C361.058+265.466+362.236+263.794+363.097+261.869C363.959+259.943+364.389+257.841+364.389+255.561C364.389+253.281+363.959+251.178+363.097+249.253C362.236+247.327+361.058+245.655+359.563+244.237C358.069+242.818+356.346+241.716+354.395+240.931C352.445+240.145+350.38+239.753+348.201+239.753C346.023+239.753+343.958+240.145+342.007+240.931C340.057+241.716+338.347+242.818+336.877+244.237C335.408+245.655+334.243+247.327+333.381+249.253C332.52+251.178+332.089+253.281+332.089+255.561ZM316.509+255.561C316.509+251.305+317.295+247.34+318.865+243.667C320.436+239.993+322.615+236.789+325.401+234.053C328.188+231.317+331.519+229.176+335.395+227.631C339.271+226.085+343.54+225.313+348.201+225.313C352.812+225.313+357.068+226.085+360.969+227.631C364.871+229.176+368.227+231.317+371.039+234.053C373.851+236.789+376.043+239.993+377.613+243.667C379.184+247.34+379.969+251.305+379.969+255.561C379.969+259.817+379.184+263.781+377.613+267.455C376.043+271.128+373.851+274.333+371.039+277.069C368.227+279.805+364.871+281.945+360.969+283.491C357.068+285.036+352.812+285.809+348.201+285.809C343.54+285.809+339.271+285.036+335.395+283.491C331.519+281.945+328.188+279.805+325.401+277.069C322.615+274.333+320.436+271.128+318.865+267.455C317.295+263.781+316.509+259.817+316.509+255.561Z" opacity="1" fill={ themeColor.main }/>
            </g>
            <g fill={ fillColor.ikanto }>
                <path d="M109.633+327.913L109.633+385.217L94.7367+385.217L94.7367+327.913L109.633+327.913Z" opacity="1" />
                <path d="M135.389+351.549L153.553+327.913L171.945+327.913L149.221+355.045L174.073+385.217L154.769+385.217L135.389+360.365L135.389+385.217L120.493+385.217L120.493+327.913L135.389+327.913L135.389+351.549Z" opacity="1" />
                <path d="M210.698+363.937L204.01+344.861L197.322+363.937L210.698+363.937ZM214.65+375.261L193.37+375.261L189.95+385.217L174.066+385.217L195.878+327.913L212.142+327.913L233.954+385.217L218.07+385.217L214.65+375.261Z" opacity="1" />
                <path d="M239.342+385.217L239.342+327.913L254.238+327.913L281.75+362.949L281.75+327.913L296.57+327.913L296.57+385.217L281.75+385.217L254.238+350.181L254.238+385.217L239.342+385.217Z" opacity="1" />
                <path d="M329.167+340.529L329.167+385.217L314.271+385.217L314.271+340.529L302.035+340.529L302.035+327.913L341.403+327.913L341.403+340.529L329.167+340.529Z" opacity="1" fill={ themeColor.main }/>
                <path d="M359.332+356.565C359.332+358.845+359.762+360.947+360.624+362.873C361.485+364.798+362.65+366.47+364.12+367.889C365.589+369.307+367.299+370.409+369.25+371.195C371.2+371.98+373.265+372.373+375.444+372.373C377.622+372.373+379.687+371.98+381.638+371.195C383.588+370.409+385.311+369.307+386.806+367.889C388.3+366.47+389.478+364.798+390.34+362.873C391.201+360.947+391.632+358.845+391.632+356.565C391.632+354.285+391.201+352.182+390.34+350.257C389.478+348.331+388.3+346.659+386.806+345.241C385.311+343.822+383.588+342.72+381.638+341.935C379.687+341.149+377.622+340.757+375.444+340.757C373.265+340.757+371.2+341.149+369.25+341.935C367.299+342.72+365.589+343.822+364.12+345.241C362.65+346.659+361.485+348.331+360.624+350.257C359.762+352.182+359.332+354.285+359.332+356.565ZM343.752+356.565C343.752+352.309+344.537+348.344+346.108+344.671C347.678+340.997+349.857+337.793+352.644+335.057C355.43+332.321+358.762+330.18+362.638+328.635C366.514+327.089+370.782+326.317+375.444+326.317C380.054+326.317+384.31+327.089+388.212+328.635C392.113+330.18+395.47+332.321+398.282+335.057C401.094+337.793+403.285+340.997+404.856+344.671C406.426+348.344+407.212+352.309+407.212+356.565C407.212+360.821+406.426+364.785+404.856+368.459C403.285+372.132+401.094+375.337+398.282+378.073C395.47+380.809+392.113+382.949+388.212+384.495C384.31+386.04+380.054+386.813+375.444+386.813C370.782+386.813+366.514+386.04+362.638+384.495C358.762+382.949+355.43+380.809+352.644+378.073C349.857+375.337+347.678+372.132+346.108+368.459C344.537+364.785+343.752+360.821+343.752+356.565Z" opacity="1" fill={ themeColor.main }/>
            </g>
        </svg>
    );
}

export default TitleLogo;