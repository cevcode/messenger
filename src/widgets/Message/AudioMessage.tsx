import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Icon } from 'ui/Icon';
import { ColorTypes, FontSizeTypes } from 'helpers/enums';
import waveImage from 'assets/wave.svg';
import { Description } from 'ui/Description';
import { Row } from 'ui/Layout';
import { convertToTime } from 'helpers/functions';

const StyledAudioWrapper = styled(Row)`
    width: 220px;
    position: static;
`;

const StyledAudioProgress: any = styled.div.attrs<IAudioMessage>(props => ({
    style: {
        width: props.progress ? props.progress + '%' : 0
    }
}))`
  background-color: #418fff;
    transition: width 0.5s ease;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
`;

const StyledAudioInfo = styled(Row)`
    width: 100%;
    justify-content: space-between;
    align-items: center;
    p {
      width: 40px;
      align-items: center;
      justify-content: center;
      display: flex;
    }
    button {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #0f3997;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        border: none;
        outline: none;
        i {
            margin-right: 0;
        }
        img {
        }
    }
`;

interface IAudioMessage {
    progress: number;
}

const AudioMessage = ({ audio }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    useEffect(() => {
        const audio: any = audioElem.current!;
        audio.addEventListener('playing', () => setIsPlaying(true), false);
        audio.addEventListener('ended', () => {
            setIsPlaying(false);
            setProgress(0);
            setCurrentTime(0);
        }, false);
        audio.addEventListener('pause', () => setIsPlaying(false), false);

        audio.addEventListener('timeupdate', () => {
            const duration = (audio && audio.duration) || 0;
            setCurrentTime(audio.currentTime);
            setProgress((audio.currentTime / duration) * 100);
        });
    }, []);

    const togglePlay = () => {
        const audio: any = audioElem.current!;
        if(!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    return (
        <StyledAudioWrapper>
            <audio ref={audioElem} src={audio} preload="auto" />
            <StyledAudioProgress progress={progress} />
            <StyledAudioInfo>
                <button onClick={togglePlay}>
                    <Icon name={isPlaying ? 'pause' : 'play_arrow'} color={ColorTypes.white} size="20px" />
                </button>
                <img src={waveImage} alt="wave" />
                <Description color={ColorTypes.white} fontSize={FontSizeTypes.s}>{convertToTime(currentTime)}</Description>
            </StyledAudioInfo>
        </StyledAudioWrapper>
    );
};

export { AudioMessage };
