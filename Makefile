
.PHONY: all build up firefox down clean

all:
	@echo "[usage] $ make [build|up|firefox|down|clean]"

build:
	hugo

up:
	killall "hugo" || true
	rm -rf /tmp/hugo_cache || true
	sleep 2
	hugo server &

firefox:
	firefox http://localhost:1313/

down:
	killall hugo

clean:
	touch .tmp_~
	find . -type f -name '*~' -exec rm {} \; -print

