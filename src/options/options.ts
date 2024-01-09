const settingInputIds = ['awesome']

interface ChangeEvent extends Event {
    target: HTMLInputElement
}

const useSettingInput = (id: string) => {
    const input = document.getElementById(id) as HTMLInputElement
    const key = `map_this_chrome_setting_${id}`
    chrome.storage.sync.get(key, function (data) {
        input.value = data[key];
    });
    input.addEventListener('onchange', (e) => {
        const event = e as ChangeEvent
        chrome.storage.sync.set({ [key]: event.target.value });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    settingInputIds.forEach(useSettingInput)
})
